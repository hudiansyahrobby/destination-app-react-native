import { checkAuth } from './product.services';
import CommentType from '../types/CommentType';
import Comment from '../models/comment.model';
import AppError from '../errorHandler/AppError';
import axios, { AxiosResponse } from 'axios';

export const createComment = async (newComment: CommentType, token: string | undefined) => {
    const uuid = await checkAuth(token);

    const comment = await Comment.findOne({
        where: {
            productId: newComment.productId,
            userUUID: uuid,
        },
    });

    if (comment) {
        throw new AppError(
            `You have commented on this destination, Update Or Delete Your Previous Comment`,
            400,
            'bad-request',
        );
    }

    const _comment = {
        ...newComment,
        userUUID: uuid,
    };
    const createdComment = await Comment.create(_comment);

    return createdComment;
};

export const getCommentsByProductId = async (productId: string) => {
    const comments = await Comment.findAll({
        where: {
            productId: productId,
        },
        raw: true,
    });

    const allUsers: Promise<AxiosResponse<any>>[] = [];

    comments.map((comment) => {
        allUsers.push(getUserByUUID(comment.userUUID));
    });

    const allUserPromises = Promise.all(allUsers);
    const users = await allUserPromises;
    console.log(users);

    const allComments = comments.map((comment, index) => {
        let _comment: CommentType = comment;
        _comment.commentator = users[index];
        return _comment;
    });

    // const users = getUserByUUID(comments)
    return allComments;
};

export const getCommentById = async (commentId: string) => {
    const comment = await Comment.findOne({
        where: {
            id: commentId,
        },
        raw: true,
    });

    if (!comment) {
        throw new AppError(`Comment with id ${commentId} not found`, 404, 'not-found');
    }

    const commentator = await getUserByUUID(comment.userUUID);
    const _comment: CommentType = comment;

    _comment.commentator = commentator;

    return _comment;
};

export const updateCommentById = async (updatedComment: CommentType, commentId: string, token: string | undefined) => {
    const uuid = await checkAuth(token);
    const comment = await Comment.findByPk(commentId);

    if (!comment) {
        throw new AppError(`Comment with id ${commentId} not found`, 404, 'not-found');
    }

    if (comment.userUUID !== uuid) {
        throw new AppError(`This comment doesn't belong to this user`, 400, 'bad-request');
    }

    const [_, _updatedComment] = await Comment.update(updatedComment, {
        where: {
            id: commentId,
        },
        returning: true,
    });

    return _updatedComment[0];
};

export const deleteCommentById = async (commentId: string, token: string | undefined) => {
    const uuid = await checkAuth(token);
    const comment = await Comment.findByPk(commentId);

    if (!comment) {
        throw new AppError(`Comment with id ${commentId} not found`, 404, 'not-found');
    }

    if (comment.userUUID !== uuid) {
        throw new AppError(`This comment doesn't belong to this user`, 400, 'bad-request');
    }

    await Comment.destroy({
        where: {
            id: commentId,
        },
    });

    return comment;
};

export const getUserByUUID = async (uuid: string) => {
    const user = await axios.get(`http://apigateway:8080/api/v1/auth/users/${uuid}`);
    return user.data.data;
};
