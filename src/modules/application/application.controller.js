import { Application } from "../../../database/models/application.model.js"
import { applicationSchema } from "./application.validation.js"

const applyForJob = async (req, res) => {

    const {error} = applicationSchema.validate(req.body)
    if (error) {
        return res.status(400).json({message: error.details[0].message})
    }

try {
    const application = new Application(req.body)
    await application.save()
    res.status(201).json(application)
} catch (error) {
    res.status(400).json({ error: error.message })
}
}

const getApplications = async (req, res) => {
try {
    const applications = await Application.find()
    .populate("jobId")
    .populate("candidateId")
    res.json(applications)
} catch (error) {
    res.status(500).json({ error: error.message })
}
}

export { 
    applyForJob, 
    getApplications 
}