const express = require('express');

const app = express();
const port = 8080;

app.use('/', express.static('public'));
app.use('/resources', express.static('resources'));


app.listen(port, ()=>{console.log(`App is running on Port 8080`)});