const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./server/database/connection')
const bodyparser = require('body-parser')
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose')

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization,Origin,X-Requested-With,Accept');
//   next();
// });

const app = express()
app.use(express.json())
app.use(cors());
//app.use(morgan('tiny'));
app.disable('x-powered-by');//less hacker know about out stack

dotenv.config();
const PORT = process.env.port || 5000


//parse request to body-parser
app.use(bodyparser.urlencoded({extended: true}))

//connect to MongoDB
connectDB();

//load routers
app.use('/', require('./server/routes/router'))

module.exports = app

if(!module.parent){
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})}
