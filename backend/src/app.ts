import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors';
import { getAllEmployees, getProjectInfo } from './db/queries'

const app = express()
app.use(cors({
    origin: "http://localhost:3000"
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
const port = process.env.PORT || 4000
app.get('/', (req:any,res:any) => {
    res.send('Hello World! Welcome to CompanyX')
})

app.get('/employees', getAllEmployees)
app.get('/projects', getProjectInfo)

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})