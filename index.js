require('dotenv').config()
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const md5 = require('md5');
// used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static('./assets'));

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(expressLayouts);
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// using express-session
app.use(session({
    name: 'PlacementCell',
    // Change before deployment
    secret: process.env.SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000*24*365
    },
    store: MongoStore.create({
        mongoUrl: 'mongodb://localhost:27017/PlacementCell_development',
        autoRemove: 'disabled'
    },function(err){
        if(err){console.log(err);}
    })
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

app.use('/', require('./routes/index'));


const PORT = 3000;
app.listen(PORT, function(err){
    if(err){console.log("Error in listening to the Server", err);}
    console.log(`Server is up and running in Port ${PORT}`);
});