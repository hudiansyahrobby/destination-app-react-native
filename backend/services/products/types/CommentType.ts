export default interface CommentType {
    content: string;
    productId: string;
    userUUID: string;
    rating: number;
    commentator?: any;
}
