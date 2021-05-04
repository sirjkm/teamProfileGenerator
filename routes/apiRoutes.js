const teamData = require("../data/teamData");

module.exports = (app) => {
app.get("/api/team", (req, res) => res.json(teamData));

app.post("/api/team", (req, res) => {
    if (teamData.length < 5) {
    teamData.push(req.body);
    res.json(true);
    }
});

app.post("/api/clear", (req, res) => {
    teamData.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
});
};
