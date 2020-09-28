import express from 'express'
import dotenv from 'dotenv'

import routes from './routes'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3333

routes(app)

export default app.listen(PORT, () => console.log(`Server running at ${PORT}`))