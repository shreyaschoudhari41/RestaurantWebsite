const express = require('express')

const router = express.Router()
const User = require('../models/user') 

router.post('/submit', async(req,res) => {
    const user = new User({
        name: req.body.name,
        number: req.body.number,
        address: req.body.address,
    });
    try{
        const a1 =  await user.save() 
        res.json(a1)
    }catch(err){
        res.send(err)
    }
})

module.exports = router