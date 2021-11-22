import { Router } from 'express'
import { createUser } from '../controllers/users'

const route = Router()

route.get('/', async (req, res) => {
  res.send('you have come to GET /users')
})

route.post('/', async (req, res) => {
  const { username } = req.body
  const user = await createUser(username)
  res.status(201).json(user)
})

export default route
