import { Request, Response } from 'express';
import { catchAsync } from '../errorHandler/catchAsync';
import {
    createComment,
    deleteCommentById,
    getCommentById,
    getCommentsByProductId,
    updateCommentById,
} from '../services/comment.services';
import CommentType from '../types/CommentType';

export const create = catchAsync(async (req: Request, res: Response) => {
    const token = req.headers.authorization;

    const newComment: CommentType = {
        ...req.body,
    };

    const comment = await createComment(newComment, token);
    return res.status(201).json({
        message: 'Comment successfully created',
        data: comment,
        status: 201,
    });
});

export const getComments = catchAsync(async (req: Request, res: Response) => {
    const { productId } = req.params;

    const comments = await getCommentsByProductId(productId);

    return res.status(200).json({
        message: 'OK',
        data: comments,
        status: 200,
    });
});

export const getComment = catchAsync(async (req: Request, res: Response) => {
    const { commentId } = req.params;

    const comment = await getCommentById(commentId);

    return res.status(200).json({
        message: 'OK',
        data: comment,
        status: 200,
    });
});

export const updateComment = catchAsync(async (req: Request, res: Response) => {
    const { commentId } = req.params;
    const token = req.headers.authorization;

    const updatedComment = {
        ...req.body,
    };

    const comment = await updateCommentById(updatedComment, commentId, token);

    return res.status(200).json({
        message: 'Comment updated successfully',
        data: comment,
        status: 200,
    });
});

export const deleteComment = catchAsync(async (req: Request, res: Response) => {
    const { commentId } = req.params;
    const token = req.headers.authorization;

    const comment = await deleteCommentById(commentId, token);

    return res.status(200).json({
        message: 'Comment deleted successfully',
        data: comment,
        status: 200,
    });
});
