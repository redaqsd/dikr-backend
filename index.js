const express = require("express")
const app = express()
require("dotenv").config()
const cors = require("cors")
const connectDB = require("./db/connectDB")
const route = require("./router/route")

app.use(cors())
app.use(express.json())
app.use("/api/v1/dikr" , route)

app.get("/" , (req , res) => {
    res.status(200).send("hello")
})

app.get("*" , (req , res) => {
    res.status(404).send("Route Does Not Exist")
})

const PORT = process.env.PORT || 3000

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        await app.listen(PORT , console.log(`Server is listening on port : ${PORT}...`))
    } catch (error) {
        console.log(error)
    }
}

start()
