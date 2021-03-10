import express from 'express';
import bodyParser from 'body-parser'
import { getAllEmployees } from './db/queries'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
const port = process.env.PORT || 4000
app.get('/', (req:any,res:any) => {
    res.send('Hello World! Welcome to CompanyX')
})

app.get('/employees', getAllEmployees)

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})