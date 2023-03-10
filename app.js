const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const chalk = require('chalk');

const app = express();
const PORT = process.env.PORT || 4000;
const productsRouter = require("./src/router/productsRouter")

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")))
app.set("views", "./src/views");
app.set("view engine", "ejs")

app.use("/products", productsRouter)

app.get("/", (req, res) => {
    //res.send('index');
    res.render('index', { username: 'Prameza', customers: ['Prem', 'Utcha'] });
})
app.listen(PORT, () => {
    debug("Listening on PORT : " + chalk.red(PORT));
})