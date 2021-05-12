export interface UserProfile {
    uid: string;
    displayName?: string;
    address: string;
    about: string;
    job: string;
    birthday: Date;
}

export interface IUser {
    id: string;
    uid: string;
    displayName: string;
    email: string;
    facebookId: string;
    createdAt: Date;
    updatedAt: Date;
}

export type UserData = Partial<UserProfile & IUser>;

export type UserProfileData = Omit<UserResponse, 'data'> & {
    data: UserData[];
};

export interface UserMeta {
    count: number;
    load: number;
    page: number;
    offset: number;
}

export interface UserResponse {
    message: string;
    data: IUser[];
    meta: UserMeta;
}
