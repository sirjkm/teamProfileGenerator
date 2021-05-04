const teamData = require("../data/tableData");

module.exports = (app) => {
app.get("/api/team", (req, res) => res.json(teamData));

app.post("/api/team", (req, res) => {
    if (tableData.length < 5) {
    tableData.push(req.body);
    res.json(true);
    } else {
    waitListData.push(req.body);
    res.json(false);
    }
});

app.post("/api/clear", (req, res) => {
    tableData.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
});
};
