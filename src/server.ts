import express from "express"
import userRoute from "./routes/users"
import urlRoute from "./routes/urls"

const app = express()

app.use("/urls", urlRoute)
app.use("/users", userRoute)

app.get("/", (req, res) => {
    res.send("Hello TS Server")
})

app.listen(5678, () => {
    console.log("Server is running on http://localhost:5678")
})