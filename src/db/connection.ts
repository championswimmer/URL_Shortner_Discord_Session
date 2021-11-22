import { createConnection } from 'typeorm'
import Url from './entities/Url'
import User from './entities/User'
import { Visit } from './entities/Visit'

export const connect = async () => {
  const connection = await createConnection({
    type: 'postgres',
    username: 'sclrac',
    password: 'sclrac',
    database: 'sclrac',
    entities: [
      Url,
      User,
      Visit,
    ],
    synchronize: true,
    logging: true,
  })
  return connection
}
