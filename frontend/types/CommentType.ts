type Commentator = {
  displayName: string;
  photoURL: string;
};

export type IComment = {
  id?: string;
  content: string;
  rating: number;
  productId: string;
  userUUID?: string;
  commentator?: Commentator;
};
