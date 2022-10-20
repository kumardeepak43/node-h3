const express = require("express");

const port =4500;
const app = express();

const middleware1 = (req, res, next) => {
    next();
};

const middleware2 = (req, res, next) => {
    next();
};
app.use(middleware1);
app.get("/",(req, res) => {
    res.send("Hii Micle");
});

app.get("/About", (req, res) =>{
    res.send("<h1>About page<h1>");
});

app.get("/section",middleware2, (req, res) => {
    res.send("<h1>Section<h1>");
});

app.get("/Contact", middleware2,(req, res) => {
    res.send("<h1>Contact<h1>");
});

app.listen(port);