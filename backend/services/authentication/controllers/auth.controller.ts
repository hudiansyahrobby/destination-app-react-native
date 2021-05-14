import { NextFunction, Request, Response } from 'express';
import { catchAsync } from '../errorHandler/catchAsync';
import { IUser } from '../interfaces/user.interface';
import {
    checkAuthUser,
    getUserByUID,
    loginUser,
    loginWithFacebook,
    loginWithGoogle,
    logoutUser,
    refreshToken,
    registerUser,
    updateUserData,
} from '../services/auth.services';

export const registerFirebase = catchAsync(async (req: Request, res: Response) => {
    const newUser: IUser = {
        ...req.body,
    };

    const userData = await registerUser(newUser);
    return res.status(201).json({ data: userData, message: 'User successfully registered', status: 201 });
});

export const loginFirebase = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    const loggedInUser = await loginUser(email, password);

    return res.status(200).json({ data: { user: loggedInUser }, message: 'User login successfully', status: 200 });
});

export const revokeRefreshToken = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { uid } = req.body;
    await refreshToken(uid);

    return res.status(200).json({ message: 'Token revoked successfully', status: 200 });
});

export const loginFacebook = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { token } = req.body;
    const { credential, user } = await loginWithFacebook(token);

    return res.status(200).json({ data: { user, credential }, message: 'User login successfully', status: 200 });
});

export const loginGoogle = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { token } = req.body;

    const { credential, user } = await loginWithGoogle(token);
    return res.status(200).json({ data: { user, credential }, message: 'User login successfully', status: 200 });
});

export const logout = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    await logoutUser();
    return res.status(200).json({ message: 'User logout successfully', status: 200 });
});

export const checkAuth = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const bearerToken = req.headers.authorization;
    const user = await checkAuthUser(bearerToken);
    return res.status(200).json({
        message: 'Token is valid',
        status: 200,
        data: user,
    });
});

export const getUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { uid } = req.params;
    const user = await getUserByUID(uid);

    return res.status(200).json({
        message: 'OK',
        status: 200,
        data: user,
    });
});

export const updateUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { uid, displayName, photoURL } = req.body;
    const updatedUser = await updateUserData(uid, displayName, photoURL);

    return res.status(200).json({
        message: 'User Updated Successfully',
        data: updatedUser,
        status: 200,
    });
});
