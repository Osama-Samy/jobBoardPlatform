import express from "express"
import { applyForJob, getApplications } from "./application.controller.js"

const applicationRouter = express.Router()

applicationRouter.post("/",applyForJob)

applicationRouter.get("/",getApplications)

export default applicationRouter
