import { Job } from "../../../database/models/job.model.js"
import { jobSchema } from "./job.validation.js"


const createJob = async (req, res) => {
    
    const {error} = jobSchema.validate(req.body)
    if (error) {
        return res.status(400).json({message: error.details[0].message})
    }
try {
    const job = new Job(req.body)
    await job.save()
    res.status(201).json(job)
} catch (error) {
    res.status(400).json({ error: error.message })
}
}

const getJobs = async (req, res) => {
try {
    const jobs = await Job.find()
    res.json(jobs)
} catch (error) {
    res.status(500).json({ error: error.message })
}
}

export { 
    createJob, 
    getJobs 
}