require('dotenv').config();
const express = require('express');

const app = express();
const PORT = 3000;


app.listen(PORT, function(err){
    if(err){console.log("Error in listening to the Server", err);}
    console.log(`Server is up and running in Port ${PORT}`);
});