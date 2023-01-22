const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const chalk = require('chalk');
const productRouter = express.Router();
const products = require("./data/products.json")
const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")))
app.set("views", "./src/views");
app.set("view engine", "ejs")

productRouter.route("/").get((req, res) => {
    res.render("products",
        products,
    );
});

productRouter.route("/1").get((req, res) => {
    res.send("Hello World !! I am products1");
});

app.use("/products", productRouter)

app.get("/", (req, res) => {
    //res.send('index');
    res.render('index', { username: 'Prameza', customers: ['Prem', 'Utcha'] });
})
app.listen(PORT, () => {
    debug("Listening on PORT : " + chalk.red(PORT));
})