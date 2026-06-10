const express = require("express");
const logger = require("./middleware/logger");

const app = express();

app.use(express.json());

app.use(logger);

app.get("/users", (req, res) => {

    setTimeout(() => {

        res.status(200).json({
            message: "Users fetched successfully"
        });

    }, 500);

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});