require('dotenv').config();
const mongoose = require('mongoose');
const productRouter = require('./routes/product');  
const userRouter = require('./routes/user');
const express = require('express');
const server = express();
const cors = require('cors');
const path = require('path');
const { auth } = require('./controller/userAuth');

//DB Connection
mongoose.connect(process.env.DB_URL)
.then(() => console.log('DB Is Connected'))
.catch((err) => console.log(err))

//Middleware
server.use(cors());
server.use(express.static(path.resolve(__dirname, process.env.STATIC_FILE)));
server.use(express.json());
server.use('/product', productRouter.routes);
server.use('/user', userRouter.routes);
server.use('*',(req,res) => {
    res.sendFile(path.resolve(__dirname,"build","index.html"))
})

//Server
server.listen(process.env.PORT,() => {
    console.log(`server is Running in ${process.env.PORT}`);
})  