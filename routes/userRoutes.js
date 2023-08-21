const express = require('express');
const userRoutes = express.Router();

//params
// http://localhost:8080/user/user-name/batman/bruce-wayne
userRoutes.get('/user-name/:heroicName/:mainName', (req, res) => {
    console.log(req.params);
    res.send(req.params);
});

// query
// http://localhost:8080/user/user-name-query?x=1&y=2&z=3
userRoutes.get('/user-name-query', (req, res) => {
    console.log(req.query);
    res.send('ok');
});

module.exports = userRoutes;