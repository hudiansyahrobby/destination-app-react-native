import Joi from 'joi';

const user = {
    profile: Joi.object().keys({
        uid: Joi.string().trim().messages({
            'string.base': `uid must be a type of string`,
            'string.empty': `uid cannot be an empty field`,
            'any.required': `uid is a required field`,
        }),
        displayName: Joi.string()
            .pattern(/^[a-zA-Z ]*$/)
            .required()
            .messages({
                'string.base': `displayName should be a type of string`,
                'string.pattern.base': `display name should only contain alphapet or space`,
                'any.required': `display name is a required field`,
                'string.empty': `displayName cannot be an empty field`,
            }),
        about: Joi.string().min(25).max(1500).messages({
            'string.base': `about should be a type of string`,
            'string.empty': `about cannot be an empty field`,
            'string.max': 'about should be less than 1500 characters',
            'string.min': 'about should be more than 50 characters',
        }),
        country: Joi.string().messages({
            'string.base': `country should be a type of string`,
            'string.empty': `country cannot be an empty field`,
        }),
    }),
};

export default user;
