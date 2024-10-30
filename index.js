import express from "express"
import {connectDB} from "./database/dbConn.js"
import jobRouter from "./src/modules/job/job.routes.js"
import candidateRouter from "./src/modules/candidate/candidate.routes.js"
import applicationRouter from "./src/modules/application/application.routes.js"

const app = express()
app.use(express.json())

app.get("*", (req, res) => {
    res.send({message: "not found"})
})

app.use("/api/jobs", jobRouter)
app.use("/api/candidates", candidateRouter)
app.use("/api/applications", applicationRouter)


app.listen(3000, () => {
    console.log("Server is running successfully")
})