import { IUser, UserData, UserProfile, UserProfileData, UserResponse } from '../interfaces/profile.interface';
import Profile from '../models/profile.model';
import axios, { AxiosResponse } from 'axios';
import { config } from 'dotenv';
import AppError from '../errorHandler/AppError';
import { getPagination } from '../helpers/getPagination';
import { getPaginationData } from '../helpers/getPaginationData';
import FormData from 'form-data';
import fs from 'fs';
import path from 'path';

config();

export const createUserProfile = async (newProfile: UserProfile) => {
    return Profile.create(newProfile);
};

export const updateUserProfile = async (updatedProfile: UserProfile, image: any, token: string | undefined) => {
    const uid = await checkAuth(token);

    const userProfile = await getUserProfile(uid);

    if (!userProfile) {
        throw new AppError(`User Profile with uid ${uid} not found`, 404, 'not-found');
    }

    const [, _updatedUserProfile] = await Profile.update(updatedProfile, {
        where: { uid },
        returning: true,
    });

    const uploadedImage = await uploadProductImage(image, uid, token);
    const photoURL = uploadedImage.data.data[0].imageUrl;
    const updatedUserData = await updateUserData(uid, updatedProfile.displayName as string, photoURL);
    const profile = _updatedUserProfile[0].toJSON();

    const userData = { ...profile, ...updatedUserData };
    return userData;
};

export const getUserProfile = async (uid: string): Promise<any> => {
    const userProfile = await Profile.findOne({
        where: {
            uid,
        },
        raw: true,
    });

    if (!userProfile) {
        throw new AppError(`User Profile with uid ${uid} not found`, 404, 'not-found');
    }

    const userData = await getUserData(uid);

    const _userProfile = { ...userProfile, ...userData };

    return _userProfile;
};

export const getMyUserprofile = async (token: string | undefined): Promise<any> => {
    const uid = await checkAuth(token);
    const userProfile = await Profile.findOne({
        where: {
            uid,
        },
        raw: true,
    });

    if (!userProfile) {
        throw new AppError('Your profile not found', 404, 'not-found');
    }

    const userData = await getUserData(uid);

    const _userProfile = { ...userProfile, ...userData };

    return _userProfile;
};

export const getAllUserProfile = async (page: number, size: number): Promise<any> => {
    const { limit, offset } = getPagination(page, size);

    const userProfiles = await Profile.findAndCountAll({
        limit,
        offset,
        raw: true,
    });

    const allUserProfiles: Promise<AxiosResponse<any>>[] = [];

    userProfiles.rows.map((userProfile) => allUserProfiles.push(getUserData(userProfile.uid)));

    const allUserProfilePromises = Promise.all(allUserProfiles);
    const profiles = await allUserProfilePromises;

    const _allUserProfiles = userProfiles.rows.map((userProfile, index) => {
        let _userProfile: UserData = userProfile;
        const profile = { ..._userProfile, ...profiles[index] };
        return profile;
    });

    const userProfileClones: any = userProfiles;
    userProfileClones.rows = _allUserProfiles;

    const _userProfileData = getPaginationData(userProfileClones, page, limit);
    return _userProfileData;
};

export const deleteUserProfile = async (token: string | undefined) => {
    const uid = await checkAuth(token);

    const userProfile = await getUserProfile(uid);

    if (!userProfile) {
        throw new AppError(`User Profile with uid ${uid} not found`, 404, 'not-found');
    }

    await Profile.destroy({
        where: { uid },
    });

    return userProfile;
};

export const checkAuth = async (token: string | undefined) => {
    let headersConfig = {};
    if (token) {
        headersConfig = {
            authorization: token,
        };
    }
    const response = await axios.post(
        `http://authentication:8087/api/v1/auth/check-auth`,
        {},
        {
            headers: headersConfig,
        },
    );
    const uid = response.data.data.uid;
    return uid;
};

export const getUserData = async (uid: string) => {
    const user = await axios.get(`http://authentication:8087/api/v1/auth/users/${uid}`);
    return user.data.data;
};

export const updateUserData = async (uid: string, displayName: string, photoURL: string) => {
    const updatedData = {
        uid,
        displayName,
        photoURL,
    };
    const user = await axios.put('http://authentication:8087/api/v1/auth/users/', updatedData);
    return user.data.data;
};

export const uploadProductImage = (images: Express.Multer.File, productId: string, token: string | undefined) => {
    let headersConfig = {};

    if (token) {
        headersConfig = {
            authorization: token,
        };
    }

    const form = new FormData();
    form.append('product_id', productId);
    form.append('images', fs.createReadStream(path.join(__dirname, '..', 'public', images.filename)));
    const headers = {
        ...form.getHeaders(),
        ...headersConfig,
    };

    return axios.post('http://images:8084/api/v1/images', form, { headers });
};
