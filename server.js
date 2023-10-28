const express = require('express');
const userRoutes = require('./routes/userRoutes');
const jodhpurRoutes = require('./routes/jodhpurRoutes');
const app = express();
const port = 8080;
import route from './routes/firstRoute'

app.use('/',route)
app.use('/user', userRoutes);
app.use('/jodhpur', jodhpurRoutes);

app.listen(port, () => {
    console.log(`localhost:${port}`);
});