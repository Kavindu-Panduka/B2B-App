const express = require('express');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');

const app = express();

// template engine
app.set('view engine', 'ejs');

// forms
app.use(express.urlencoded({extended:false}));

const oneDay = 1000 * 60 * 60 * 24;  // creating 24 hours from milliseconds
// sessions
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));
// cookies
app.use(cookieParser());

//Routes
app.use(express.static('public'));
app.use(require('./routes/profile'));
app.use(require('./routes/auth'));
app.use(require('./routes/api'));
app.use(require('./routes/order'));
app.use(require('./routes/home'));

const PORT = process.env.PORT || 4111;
app.listen(PORT, console.log("Server has started at port: " + PORT))