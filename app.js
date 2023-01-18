const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan')
const path = require('path')

const app   = express();
const port  = 2000;
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")))

app.get("/", (req,res) => {
    res.send('New Version Log1');
})
app.listen(port, ()=> {
    console.log("Listening on port %d",port);
})