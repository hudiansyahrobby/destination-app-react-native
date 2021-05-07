export type IDestination = {
  id: string;
  name: string;
  city: string;
  province: string;
  description: string;
  categoryId: string;
  categoryName: string;
  images: Array<string>;
  createdAt: Date;
  updatedAt: Date;
};
