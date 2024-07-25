const express = require('express');

const mongoose = require('mongoose');

const app = express();

app.use(express.json());

const port =4000 


const mongoUrl=""

mongoose.connect(mongoUrl,{});


mongoose.connection.on('connected', () => {
    console.log("connected to mongoDB successfully");
})

const route = require('./routes/route')

app.use('api/', route)

const server = app.listen(port, () => {
    console.log("My server has started on port" + port)
})