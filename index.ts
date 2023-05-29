import { AppDataSource } from "./src/databases/data-source"

const express  = require("express") 
const app = express()
app.use(express.json())

app.get('/', (request, response) => {
    return response.json("Aobaaaa")
})

app.listen(3333, () =>
    console.log("O server está ON na porta 3333.")
)

AppDataSource.initialize()