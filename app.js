console.log('\n\n-: App Started :-');

const { count } = require('console');
const express   = require('express');
const bodyParser    = require('body-parser');
const session       = require('express-session');
const mongoose      = require('mongoose');
const ticketRoute   = require('./routes/ticketRoute');

const MONGODB_URI   = "mongodb+srv://tester:tester1234@cluster0.hlicuim.mongodb.net/Mydb?retryWrites=true&w=majority";
const app           = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(ticketRoute);
console.log('-: App Running :-');

mongoose.connect(MONGODB_URI).then(result => app.listen(3000)).catch(err=>console.log(err));
