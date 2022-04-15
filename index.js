require('dotenv').config();
const express = require('express');

const app = express();
const PORT = 3000;

app.use('/', require('./routes/index'));

app.listen(PORT, function(err){
    if(err){console.log("Error in listening to the Server", err);}
    console.log(`Server is up and running in Port ${PORT}`);
});