import User, { getUserRepository } from '../db/entities/User'

export async function createUser (username: string) {
  const user = new User()
  user.username = username
  return await getUserRepository().save(user)
}
