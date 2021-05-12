import Joi from 'joi';

const product = {
    product: Joi.object().keys({
        name: Joi.string().trim().required().messages({
            'string.base': `name must be a type of string`,
            'string.empty': `name cannot be an empty field`,
            'any.required': `name is a required field`,
        }),

        province: Joi.string().trim().required().messages({
            'string.base': `province must be a type of string`,
            'string.empty': `province cannot be an empty field`,
            'any.required': `province is a required field`,
        }),

        city: Joi.string().trim().required().messages({
            'string.base': `city must be a type of string`,
            'string.empty': `city cannot be an empty field`,
            'any.required': `city is a required field`,
        }),

        description: Joi.string().trim().max(5000).required().messages({
            'string.base': `description must be a type of string`,
            'string.empty': `description cannot be an empty field`,
            'string.max': 'description must not be greater than 5000 characters',
            'any.required': `description is a required field`,
        }),

        categoryId: Joi.string().trim().required().messages({
            'string.base': `categoryId must be a type of string`,
            'string.empty': `categoryId cannot be an empty field`,
            'any.required': `categoryId is a required field`,
        }),
    }),
};

export default product;
