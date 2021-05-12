import { Router } from 'express';
import { create, createBulk, getDetail, getProducts, remove, update } from '../controllers/product.controller';
import uploadFiles from '../helpers/initMulter';
import isValid from '../middlewares/isValid';
import ProductValidation from '../validations/product.validation';

const router: Router = Router();

router.post('/products', uploadFiles, isValid(ProductValidation.product, 'body'), create);

router.post('/products/create-bulk', createBulk);

router.get('/products/:productId', getDetail);

router.get('/products', getProducts);

router.put('/products/:productId', uploadFiles, isValid(ProductValidation.product, 'body'), update);

router.delete('/products/:productId', remove);

export default router;
