const express = require('express');//引入express模块
const Router = express.Router();
const logRouter = require('./login');
const indexRouter=require('./index');



Router.use('/login', logRouter);
Router.use('/index', logRouter);
module.exports = Router;