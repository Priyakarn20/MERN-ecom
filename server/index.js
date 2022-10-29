require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.Port;

app.get('/',(req,res)=>{
    res.send("app is working")
});

app.listen(port, console.log('server is running on port'));
