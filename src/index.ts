import express from 'express'
import cors from 'cors'
import swaggerDocs from './utils/swagger'
import databaseService from './services/database.service'
const app: express.Express = express()
app.use(cors())
swaggerDocs(app, 3000)
databaseService.connect()
app.listen(3000, () => {
  console.log('Server is listenning Port 3000')
})
