const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./server/database/connection')
const bodyparser = require('body-parser')
const app = express()
const cors = require('cors');
const mongoose = require('mongoose')

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization,Origin,X-Requested-With,Accept');
  next();
});

dotenv.config();
const PORT = process.env.port || 5000

app.use(express.json())

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
})
}
