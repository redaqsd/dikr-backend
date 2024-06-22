const express = require("express")
const app = express()
require("dotenv").config()
app.use(express.json())
const mongoose = require("mongoose")
const Dikr = require("./schema")
const cors = require("cors")

app.use(cors())
app.use(express.json())


app.get("/api/v1/dikr", async(req, res) => {
    const dikr = await Dikr.find({})
    res.status(200).json({dikr})
})


const connectDB = async (url) => {
    try {
        await mongoose.connect(url)
        console.log("connected")
    } catch (error) {
        console.error("Error connecting to MongoDB:", error)
    }
}

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
