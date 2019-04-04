
// module.exports = Router;
const express = require('express');//引入express模块
const mongo = require('../db/run');
const ObjectId = require("mongodb").ObjectId;
// const token = require('../unit/token');
const Router = express.Router();


//参数接受和 GET 基本一样，不同的在于 GET 是 request.query 而 POST 的是 request.body

const bodyParser = require('body-parser');

// 创建urlencoded 编码解析（把请求头content-type值为application/x-www-form-urlencoded时的数据格式化到request.body中）

const urlencodedParser = bodyParser.urlencoded({ extended: false })

// 创建json编码解析（把请求头content-type值为application/json时的数据格式化到request.body中）

const jsonParser = bodyParser.json();
Router.post('/', urlencodedParser,async(request, response) => {
    let { user, psw } = request.body;
    // console.log({ user, psw });

    let res = await mongo.find("administrator",{user});
    // console.log(res[0].user);
    if(res.length>0){
        // 登录成功：发令牌
        // let _token = token.create(username);
        let result = {
            user:res[0].user,
            code:1,
            msg:'登陆成功'
        };
        response.send (result);
        // response.send('1');

    }else{
        let result = {
            // user:res[0].user,
            code:0,
            msg:'登录失败'
        };
        response.send (result);
    //    response.send('0');
    }
        // ('登录失败');
});

//暴露接口
module.exports = Router;