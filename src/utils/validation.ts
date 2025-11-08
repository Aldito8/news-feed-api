import Joi from "joi";

export const authSchema = Joi.object({
    username: Joi.string().required().min(4),
    password: Joi.string().required().min(6),
})

export const feedSchema = Joi.object({
    content: Joi.string().required().max(200)
})