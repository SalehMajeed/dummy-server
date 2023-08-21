const express = require('express');
const userRoutes = require('./routes/userRoutes');
const jodhpurRoutes = require('./routes/jodhpurRoutes');
const app = express();
const port = 8080;

app.use('/user', userRoutes);
app.use('/jodhpur', jodhpurRoutes);

app.listen(port, () => {
    console.log(`localhost:${port}`);
});