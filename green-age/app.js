const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

// routes
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/gallery", (req, res) => {
    res.render("gallery");
});

app.get("/blog", (req, res) => {
    res.render("blog");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});