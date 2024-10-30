import { Candidate } from "../../../database/models/candidate.model.js"
import { candidateSchema } from "./candidate.validation.js"


const createCandidate = async (req, res) => {
    
    const {error} = candidateSchema.validate(req.body)
    if (error) {
        return res.status(400).json({message: error.details[0].message})
    }
try {
    const candidate = new Candidate({
    ...req.body,
    resume: req.file ? req.file.path : undefined,
    })
    await candidate.save()
    res.status(201).json(candidate)
} catch (error) {
    res.status(400).json({ error: error.message })
}
}

const getCandidates = async (req, res) => {
try {
    const candidates = await Candidate.find()
    res.json(candidates)
} catch (error) {
    res.status(500).json({ error: error.message })
}
}

export { 
    createCandidate, 
    getCandidates
}