import Joi from "joi"

export const jobSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    company: Joi.string().required(),
    location: Joi.string().required(),
    createdAt: Joi.date().required()
})