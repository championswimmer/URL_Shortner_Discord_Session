import { Router } from 'express'
import { createShortUrl } from '../controllers/urls'

const route = Router()

route.get('/', (req, res) => {
  res.send('you have come to  GET /urls')
})

route.post('/', async (req, res) => {
  const { longUrl } = req.body
  const url = await createShortUrl(longUrl)
  res.status(201).json(url)
})

export default route
