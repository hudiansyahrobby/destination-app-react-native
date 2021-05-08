export type IUser = {
  uid?: string;
  displayName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export type IUserProfile = IUser & {
  id: string;
  about?: string;
  country?: string;
  createdAt: Date;
  updatedAt: Date;
};
