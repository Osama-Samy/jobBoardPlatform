import express from "express"
import { createCandidate, getCandidates } from "./candidate.controller.js"
import upload from "../../middlewares/upload.js"


const candidateRouter = express.Router()

candidateRouter.post("/", upload.single("resume"), createCandidate)

candidateRouter.get("/", getCandidates)

export default candidateRouter
