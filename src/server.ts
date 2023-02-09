import express, { Request, Response } from 'express'
import bodyParser from 'body-parser';
import cors from "cors";
import usersRoute from './routes/usersRoute';
import productRoute from './routes/productRoute';

var corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }


const app: express.Application = express()
const address: string = "0.0.0.0:3000"

app.use(bodyParser.json())
app.use(cors(corsOptions))
app.use('/users', usersRoute)
app.use('/products', productRoute)

app.get('/', function (_req: Request, res: Response) {
    res.send('Welcome to Storefront Backend')
})

app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})
