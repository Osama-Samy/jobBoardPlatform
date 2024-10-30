import mongoose from "mongoose"

const applicationSchema = new mongoose.Schema({
jobId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Job", 
    required: true 
},
candidateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Candidate",
    required: true,
},
status: { 
    type: String, 
    default: "applied" 
},
appliedAt: { 
    type: Date, 
    default: Date.now 
}
})

export const Application = mongoose.model("Application", applicationSchema)