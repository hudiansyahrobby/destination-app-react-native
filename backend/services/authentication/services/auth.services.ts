import axios from 'axios';
import firebase from 'firebase';
import admin from 'firebase-admin';
import AppError from '../errorHandler/AppError';
import { IUser } from '../interfaces/user.interface';
import User from '../models/user.model';

export const saveUserOnDB = async (newUser: IUser) => {
    return User.create(newUser);
};

export const registerUser = async (newUser: IUser) => {
    const user = await admin.auth().createUser(newUser);

    await createUserProfile({ uid: user.uid });

    return user;
};

export const loginUser = async (email: string, password: string) => {
    const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);

    if (!user) {
        throw new AppError('Email or password is wrong', 400, 'wrong-credentials');
    }

    const token = await user?.getIdToken();

    let loggedInUser;
    if (user) {
        const userJSON: any = user.toJSON();

        const { uid, displayName, email, photoURL } = userJSON;
        const { data } = await getUserProfileByUID(uid);
        const isAdmin = data.data.isAdmin;

        loggedInUser = {
            uid,
            displayName,
            email,
            token,
            photoURL,
            isAdmin,
        };
    }

    return loggedInUser;
};

export const refreshToken = async (uid: string) => {
    const a = await firebase.auth().currentUser?.getIdTokenResult(true);
    console.log('AAA', firebase.auth().currentUser);
    return a;
};

export const loginWithFacebook = async (token: string) => {
    const credentialToken = firebase.auth.FacebookAuthProvider.credential(token);
    return firebase.auth().signInWithCredential(credentialToken);
};

export const loginWithGoogle = async (token: string) => {
    const credentialToken = firebase.auth.GoogleAuthProvider.credential(token);
    return firebase.auth().signInWithCredential(credentialToken);
};

export const logoutUser = async () => {
    return firebase.auth().signOut();
};

export const verifyToken = async (token: string) => {
    const { uid } = await admin.auth().verifyIdToken(token);
    return getUserByUID(uid);
};

export const getUserByUID = async (uid: string) => {
    const user = await admin.auth().getUser(uid);
    if (!user) throw new AppError(`User with uid ${uid} not found`, 404, 'not-found');
    return user;
};

export const createUserProfile = async (uid: { uid: string }) => {
    return axios.post('http://apigateway:8080/api/v1/user-profile', uid);
};

export const getUserProfileByUID = async (uid: string) => {
    return axios.get(`http://apigateway:8080/api/v1//user-profile/${uid}`);
};

export const checkAuthUser = async (bearerToken: string | undefined) => {
    if (!bearerToken) {
        throw new AppError('Access denied, Token does not exist on headers', 403, 'forbidden');
    }

    const accessToken: string = bearerToken.split(' ')[1];
    if (!accessToken) {
        throw new AppError('Access denied, Token does not well formatted', 403, 'forbidden');
    }

    const user = await verifyToken(accessToken);
    return user;
};

export const checkIsAdmin = async (bearerToken: string | undefined) => {
    if (!bearerToken) {
        throw new AppError('Access denied, Token does not exist on headers', 403, 'forbidden');
    }

    const accessToken: string = bearerToken.split(' ')[1];
    if (!accessToken) {
        throw new AppError('Access denied, Token does not well formatted', 403, 'forbidden');
    }

    const user = await verifyToken(accessToken);
    const { data } = await getUserProfileByUID(user.uid);
    const isAdmin = data.data.isAdmin;

    if (!isAdmin) {
        throw new AppError("Access Denied, You're not Admin", 403, 'forbidden');
    }

    return {
        ...user,
        isAdmin,
    };
};

export const updateUserData = async (uid: string, displayName: string, photoURL: string) => {
    await getUserByUID(uid);

    const { photoURL: avatar, email } = await admin.auth().updateUser(uid, {
        displayName,
        photoURL,
    });

    const updatedUser = { uid, displayName, photoURL: avatar, email };

    return updatedUser;
};
