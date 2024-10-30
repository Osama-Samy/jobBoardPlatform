import Joi from "joi"

export const applicationSchema = Joi.object({
    jobId: Joi.string().required(),
    candidateId: Joi.string().required(),
    status: Joi.string().required(),
    appliedAt: Joi.date().required()
})