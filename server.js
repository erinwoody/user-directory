const express = require("express");
const mustacheExpress = require("mustache-express");
const path = require("path");
const data = require("./data");
const port = process.env.PORT || 8000;
const app = express();

app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
    res.render("index", data);
});

app.get("/profile/:id", function (req, res) {
    let requestUserId = parseInt(req.params.id);
    let userPage = data.users.find(user => user.id === requestUserId);

    res.render("profile", userPage);
});

app.listen(port, function () {
    console.log(`Server is running on port ${port}!`);
});
