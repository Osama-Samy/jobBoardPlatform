import express from "express"
import { createJob, getJobs } from "./job.controller.js"

const jobRouter = express.Router()

jobRouter.post("/", createJob)

jobRouter.get("/", getJobs)

export default jobRouter
