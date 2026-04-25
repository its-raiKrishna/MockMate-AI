const express = require("express");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const interviewRoutes = require("./routes/interviewRoutes");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/", authRoutes);
app.use("/", interviewRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});