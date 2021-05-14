import { Router } from 'express';
import { create, deleteComment, getComment, getComments, updateComment } from '../controllers/comment.controller';

const router: Router = Router();

router.post('/products/comments', create);

router.get('/products/comments/:commentId', getComment);

router.get('/products/:productId/comments', getComments);

router.put('/products/comments/:commentId', updateComment);

router.delete('/products/comments/:commentId', deleteComment);

export default router;
