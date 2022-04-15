const express = require('express');
const expressLayout = require('express-ejs-layouts');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('./assets'));

app.use('/', require('./routes/index'));
app.set('view engine', 'ejs');
app.set('views', './views');

const PORT = 3000;
app.listen(PORT, function(err){
    if(err){console.log("Error in listening to the Server", err);}
    console.log(`Server is up and running in Port ${PORT}`);
});