require('dotenv').config();
const express = require('express');
const app = express();
const connecttoDB= require( './db');
const UserRoute = require('./routes/user.routes');
const cors = require('cors');
const port = process.env.Port;

connecttoDB();

app.use(express.json());
app.use(cors());
app.use('/user', UserRoute);

app.get('/',(req,res)=>{
    res.send("app is working")
});

app.listen(port, console.log('server is running on port'));
