const express = require('express');
const app = express();

const Router = require('./src/api/router');
app.use(express.static('./src'));

app.use('/api', Router);



app.listen(9000, () => {
  console.log('服务已开启 端口号：9000');
})