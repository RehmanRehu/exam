const express = require('express');

const mongoose = require('mongoose');

const app = express();

app.use(express.json());

const port = 4000 


const mongoUrl="mongodb+srv://rehmanorange1:K7C3dTCF70o0o9Hp@cluster0.r16heyo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongoUrl,{});


mongoose.connection.on('connected', () => {
    console.log("connected to mongoDB successfully");
})

const route = require('./routes/route')

app.use('api/', route)

const server = app.listen(port, () => {
    console.log("My server has started on port" + port)
})