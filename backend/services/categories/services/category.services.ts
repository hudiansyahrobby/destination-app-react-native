import Category from '../models/category.model';
import CategoryType from '../interfaces/Category';
import { Op } from 'sequelize';
import axios from 'axios';
import AppError from '../errorHandler/AppError';

export const createCategory = async (name: string, token: string | undefined) => {
    await checkIsAdmin(token);
    const [category, created] = await Category.findOrCreate({
        where: {
            name: {
                [Op.iLike]: name,
            },
        },
        defaults: {
            name,
        },
    });

    if (!created) {
        throw new AppError(`Category with name ${name} is already exist`, 400, 'bad-request');
    }

    return category;
};

export const findCategoryById = async (categoryId: string) => {
    const category = await Category.findOne({
        where: {
            id: categoryId,
        },
    });

    if (!category) {
        return {
            id: 'aodjwaohjoiawhdw',
            name: 'Tanpa Kategori',
        };
    }

    return category;
};

export const findAllCategories = () => {
    return Category.findAll();
};

export const updateCategoryById = async (
    updatedCategory: CategoryType,
    categoryId: string,
    token: string | undefined,
) => {
    await checkIsAdmin(token);

    const category = await findCategoryById(categoryId);

    if (!category) {
        throw new AppError(`Category with id ${categoryId} not found`, 404, 'not-found');
    }

    const [_, _updatedCategory] = await Category.update(updatedCategory, {
        where: {
            id: categoryId,
        },
        returning: true,
    });

    return _updatedCategory;
};

export const deleteCategoryById = async (categoryId: string, token: string | undefined) => {
    await checkIsAdmin(token);
    const category = await findCategoryById(categoryId);

    if (!category) {
        throw new AppError(`Category with id ${categoryId} not found`, 404, 'not-found');
    }

    Category.destroy({
        where: {
            id: categoryId,
        },
    });

    return category;
};

export const checkIsAdmin = async (token: string | undefined) => {
    let headersConfig = {};

    if (token) {
        headersConfig = {
            authorization: token,
        };
    }
    const response = await axios.post(
        `http://apigateway:8080/api/v1/auth/check-admin`,
        {},
        {
            headers: headersConfig,
        },
    );

    const uid = response.data.data.uid;
    return uid;
};
