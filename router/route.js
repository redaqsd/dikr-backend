const express = require("express")
const route = express.Router()

const {getDikr , addDikr , updateDikr , getDikrID , deleteDikr} = require("../controller/controller")

route.get("/" , getDikr)
route.post("/" , addDikr)
route.get("/:id" , getDikrID)
route.delete("/:id" , deleteDikr)
route.patch("/:id" , updateDikr)


module.exports = route