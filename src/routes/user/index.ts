import { Express, Request, Response } from 'express'

export default (app: Express) => {
  app.route('/user')
    .get((req: Request, res: Response) => {
      // console.log(req)
      res.status(200).json('User')
    })
}