const path = require("path");

module.exports = (app) => {
    app.get("/team", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/team.html"));
});

    app.get("/create", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/create.html"));
});

    app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
};
