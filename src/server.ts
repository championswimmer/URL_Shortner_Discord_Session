import express from "express"

const app = express()

app.get("/", (req, res) => {
    res.send("Hello TS Server")
})

app.listen(5678, () => {
    console.log("Server is running on http://localhost:5678")
})