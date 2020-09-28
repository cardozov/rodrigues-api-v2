import { Express } from 'express'

import spot from './spot'
import user from './user'

export default (app: Express) => {
  spot(app)
  user(app)
}