const express = require('express');
const userRoute = express.Router();

//params
// http://localhost:8080/user/user-name/batman/bruce-wayne
userRoute.get('/user-name/:heroicName/:mainName', (req, res) => {
    console.log(req.params);
    res.send(req.params);
});

// query
// http://localhost:8080/user/user-name-query?x=1&y=2&z=3
userRoute.get('/user-name-query', (req, res) => {
    console.log(req.query);
    res.send('ok');
});

module.exports = userRoute;