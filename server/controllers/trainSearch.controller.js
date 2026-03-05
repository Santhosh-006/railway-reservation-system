import Train from "../models/train.model.js";

export const getAllTrains = async (req, res) => {
  try {
    const trains = await Train.find();
    return res.json(trains);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

export const searchTrain = async (req, res) => {
  try {
    const fromStation = req.body.fromStation;
    const toStation = req.body.toStation;
    const trainId = req.body.trainId;

    const train = await Train.findById(trainId);
    if (!train) {
      res.status(404).json({ message: "Train not found " });
    }

    const from = train.stations.find((st) => st.name === fromStation);
    const to = train.stations.find((st) => st.name === toStation);

    if (!from || !to) {
      res.status(404).json({ message: "Station not found " });
    }

    if (from.order > to.order) {
      res.status(404).json({ message: "Invalid Station order" });
    }

    return res
      .status(200)
      .json({ message: "Train available between selected stations", from, to });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
