import mongoose from "mongoose"

const candidateSchema = new mongoose.Schema({
name: { 
    type: String, 
    required: true 
},
email: { 
    type: String, 
    required: true, 
    unique: true 
},
resume: { 
    type: String 
} // Path to uploaded resume file
})

export const Candidate = mongoose.model("Candidate", candidateSchema)
