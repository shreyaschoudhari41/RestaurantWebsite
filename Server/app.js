const express = require('express')
const mongoose = require('mongoose')
const url = "mongodb+srv://shreyas_41:nirmalachoudhari@cluster0.idzc6.mongodb.net/food?retryWrites=true&w=majority"

const app = express()

mongoose.connect(url, {useNewUrlParser:true,useUnifiedTopology: true})
const con = mongoose.connection

con.on('open', () => { 
    console.log('connected...')
})

app.use(express.json())

const userRouter = require('./routes/Users')
app.use('/',userRouter)

app.listen(5000, () => {
    console.log('Server started')
})