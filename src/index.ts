import express from 'express';
import cors from 'cors';
import { ppid } from 'process';
import swaggerDocs from './utils/swagger'

const app: express.Express = express();
app.use(cors());
swaggerDocs(app, 3000)
app.listen(3000, () => {
  console.log('Server is listenning Port 3000')
 
})
