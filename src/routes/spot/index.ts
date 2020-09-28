import { Express, Request, Response } from 'express'

export default (app: Express) => {
  app.route('/spot')
    .get((req: Request, res: Response) => {
      // console.log(req)
      res.status(200).json({
        name: 'Vinicius Cardozo',
        cpf: '43046469829',
        period: ['2020-09-24', '2020-09-25', '2020-09-26']
      })
    })
}
