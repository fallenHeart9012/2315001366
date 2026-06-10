const express = require("express");
const notifications = require("./notifications");

const app = express();

app.use(express.json());

// Create notification
app.post("/notifications", (req, res) => {

    notifications.push(req.body);

    res.status(201).json({
        message: "Notification created"
    });
});

// Get all notifications
app.get("/notifications", (req, res) => {

    res.status(200).json(notifications);
});

// Get notification by id
app.get("/notifications/:id", (req, res) => {

    const notification = notifications.find(
        n => n.id == req.params.id
    );

    if (!notification) {
        return res.status(404).json({
            message: "Notification not found"
        });
    }

    res.json(notification);
});

// Delete notification
app.delete("/notifications/:id", (req, res) => {

    const index = notifications.findIndex(
        n => n.id == req.params.id
    );

    if (index === -1) {
        return res.status(404).json({
            message: "Notification not found"
        });
    }

    notifications.splice(index, 1);

    res.json({
        message: "Notification deleted"
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});