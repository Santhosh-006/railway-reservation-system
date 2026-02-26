import Train from "../models/train.model.js";

export const getTrains = async (req, res) => {
  try {
    const trains = await Train.find();
    return res.json(trains);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTrainDetails = async (req, res) => {
  try {
    console.log(req.body);

    if (!Array.isArray(req.body.stations) || req.body.stations.length === 0) {
      return res.status(400).json({
        message: "Stations must be a non-empty array",
      });
    }

    const newTrain = new Train({
      trainName: req.body.trainName,
      trainNumber: req.body.trainNumber,
      stations: req.body.stations,
      totalSeats: req.body.totalSeats,
      journeyDate: req.body.journeyDate,
    });

    const train = await newTrain.save();
    return res.json(train);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export const updateTrain = async (req, res) => {
  try {
    const train = await Train.findOne({ trainNumber: req.params.id });
    if (!train) {
      return res.status(400).json({ message: "Train Number not available" });
    }

    train.trainName = req.body.trainName || train.trainName;
    train.trainNumber = req.body.trainNumber || train.trainNumber;
    train.stations = req.body.stations || train.stations;
    train.totalSeats = req.body.totalSeats || train.totalSeats;
    train.journeyDate = req.body.journeyDate || train.journeyDate;

    const updatedTrain = await train.save();

    return res.status(200).json(updatedTrain);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export const deleteTrain = async (req, res) => {
  try {
    await Train.deleteOne({ trainNumber: req.params.id });
    return res.json({ message: "Train deleted Successfully" });
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};
