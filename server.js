const express = require('express');
const serverConfig=require('./configs/server.config.js')

const app=express();


app.listen(serverConfig.PORT,()=>{
    console.log(`Server Started on the port ${serverConfig.PORT}`);
    
})