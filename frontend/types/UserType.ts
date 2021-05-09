export type IUser = {
  uid?: string;
  displayName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export type IUserProfile = IUser & {
  id: string;
  photoURL?: string;
  displayName?: string;
  about?: string;
  country?: string;
  createdAt: Date;
  updatedAt: Date;
};

export type updatedProfileData = {
  displayName: string;
  country: string;
  about: string;
  images: any;
};
