const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/interview", (req, res) => {
    res.render("interview");
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});