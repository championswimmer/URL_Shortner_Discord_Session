import Url, { getUrlRepository } from '../db/entities/Url'
import { genRandomShortcode } from '../services/shortcode'

export async function createShortUrl (longUrl: string): Promise<Url> {
  const repo = getUrlRepository()
  const shortCode = genRandomShortcode()
  // TODO: check if this short code esists in the database; if yes, generate again

  const url = new Url()
  url.shortCode = shortCode.shortCode
  url.id = shortCode.randomInt
  url.longUrl = longUrl
  // url.owner = null // FIXME: should set user properly based on authentication
  return await repo.save(url)
}
