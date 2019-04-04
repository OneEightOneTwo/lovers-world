const express = require('express');//引入express模块
const Router = express.Router();
const logRouter = require('./login');
// const indexRouter=require('./index');
// const changepswRouter=require('./changepsw');


// Router.use('/changepsw', changepswRouter);
Router.use('/login', logRouter);
// Router.use('/index', indexRouter);
module.exports = Router;