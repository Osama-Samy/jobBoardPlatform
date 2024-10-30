import Joi from "joi"

export const candidateSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    resume: Joi.string().required()
})