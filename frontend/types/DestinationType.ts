import { IComment } from './CommentType';

export type IDestination = {
  id: string;
  name: string;
  city: string;
  province: string;
  description: string;
  categoryId: string;
  images: Array<string>;
  comments: IComment[];
  createdAt: Date;
  updatedAt: Date;
};
