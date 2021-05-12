export default interface Product {
    name: string;
    city: string;
    province: string;
    description: string;
    categoryId: string;
}

export type imageObj = {
    id: string;
    imageId: string;
    imageUrl: string;
    productId: string;
};

export type ProductType = Product & {
    categoryName?: string;
    images?: imageObj[];
};
