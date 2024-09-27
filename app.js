const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 4000;
const UserRoutes = require("./routes/UserRoutes")
const AuthRoutes = require("./routes/AuthRoutes")
app.use("/user", UserRoutes)
app.use("/", AuthRoutes)

app.listen(port, () => {
    console.log("Server listening on port: " + port)
});

app.get("/get", (req, res) => {
    const status = {
        "GET REQUEST" : "WORKING"
    };
    res.send(status)
});

app.post("/get", (req, res) => {
    const status = {
        "GET REQUEST" : "WORKING"
    };
    res.send(status)
});

app.put("/get", (req, res) => {
    const status = {
        "GET REQUEST" : "WORKING"
    };
    res.send(status)
});

