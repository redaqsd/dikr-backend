const Dikr = require("../model/schema")

const getDikr = async(req,res) => {
    const dikr = await Dikr.find({})
    res.status(200).json({dikr})
}

const addDikr = async(req,res) => {
    const dikr = await Dikr.create(req.body)
    res.status(201).json({dikr})
}

const updateDikr = async(req,res) => {
    const {id : dikrID} = req.params
    const options = {
        new : true,
        runValidators : true
    }
    const dikr = await Dikr.findOneAndUpdate({_id : dikrID} , req.body , options)

    if(!dikr){
        res.status(400).send(`No Dikr Found With The Following ID : ${dikrID}`)
    }

    res.status(200).json({dikr})
}

const getDikrID = async(req,res) => {
    const {id : dikrID} = req.params
    const dikr = await Dikr.findOne({_id : dikrID})

    if(!dikr){
        res.status(400).send(`No Dikr Found With The Following ID : ${dikrID}`)
    }

    res.status(201).json({dikr})
}


const deleteDikr = async(req,res) => {
    const {id : dikrID} = req.params
    const dikr = await Dikr.findByIdAndDelete({_id : dikrID})

    if(!dikr){
        res.status(400).send(`No Dikr Found With The Following ID : ${dikrID}`)
    }

    res.status(201).json({dikr})
}



module.exports = {getDikr , addDikr , updateDikr , getDikrID , deleteDikr}