import { Router } from "express"

const route = Router()

route.get("/", (req, res) => {
    res.send("you have come to  GET /urls")
})

export default route