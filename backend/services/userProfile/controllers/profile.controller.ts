import { Response, Request, NextFunction } from 'express';
import { catchAsync } from '../errorHandler/catchAsync';
import {
    createUserProfile,
    deleteUserProfile,
    getAllUserProfile,
    getMyUserprofile,
    getUserProfile,
    searchUserProfile,
    updateUserProfile,
} from '../services/profile.services';

export const createProfile = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const newProfile = {
        ...req.body,
    };
    const _newProfile = await createUserProfile(newProfile);
    return res.status(201).json({ message: 'User Profile successfully created', data: _newProfile, status: 201 });
});

export const getProfileById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { profileId } = req.params;

    const userProfile = await getUserProfile(profileId);

    return res.status(200).json({ message: 'OK', data: userProfile, status: 200 });
});

export const getAllProfile = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { page, size } = req.query;

    const _page = parseInt(page as string);
    const _size = parseInt(size as string);

    const { results, totalItems, totalPages, limit } = await getAllUserProfile(_page, _size);
    return res.status(200).json({
        message: 'OK',
        data: results,
        status: 200,
        meta: {
            count: totalItems,
            load: results.length,
            page: totalPages,
            offset: limit,
        },
    });
});

export const getMyProfile = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    const userprofile = await getMyUserprofile(token);
    return res.status(200).json({ message: 'OK', data: userprofile, status: 200 });
});

export const updateProfile = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    const image = req.file;
    const updatedProfileData = { ...req.body };
    console.log('UPDATED', updatedProfileData);
    console.log('IMAGES', image);
    const updatedProfile = await updateUserProfile(updatedProfileData, image, token);

    return res.status(200).json({ message: 'User profile updated successfully', data: updatedProfile, status: 200 });
});

export const deleteProfile = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    const deletedProfile = await deleteUserProfile(token);
    return res.status(200).json({ message: 'User profile deleted successfully', data: deletedProfile, status: 200 });
});

export const searchUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { keyword } = req.params;
    const userProfile = await searchUserProfile(keyword);
    return res.status(200).json({ message: 'OK', data: userProfile, status: 200 });
});
