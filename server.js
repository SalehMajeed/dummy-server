const express = require('express');
const userRoute = require('./userRoute');
const app = express();

app.use('/user', userRoute);

app.listen(8080);
