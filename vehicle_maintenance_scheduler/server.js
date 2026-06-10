const express = require("express");

const app = express();

app.use(express.json());

let vehicles = [];

app.post("/vehicles", (req, res) => {

    vehicles.push(req.body);

    res.status(201).json({
        message: "Vehicle added"
    });

});

app.get("/vehicles", (req, res) => {

    res.status(200).json(vehicles);

});
app.get("/vehicles/upcoming", (req, res) => {

    const upcoming = vehicles.map(vehicle => {

        const nextServiceDate = new Date(vehicle.lastServiceDate);

        nextServiceDate.setDate(
            nextServiceDate.getDate() +
            vehicle.serviceIntervalDays
        );

        return {
            vehicleNumber: vehicle.vehicleNumber,
            nextServiceDate:
                nextServiceDate.toISOString().split("T")[0]
        };
    });

    res.json(upcoming);
});

app.listen(3000, () => {
    console.log("Server running");
});
