import Booking from "../models/booking.model.js";
import Train from "../models/train.model.js";

export const bookTrain = async (req, res) => {
  try {
    const train = await Train.findById(req.body.trainId);
    if (!train) {
      return res.status(404).json({ message: "Train Not Found" });
    }

    let availableSeats = train.totalSeats - train.seatsBooked;
    if (availableSeats < req.body.seatsBooked) {
      return res.status(400).json({ message: "Not enough Seats" });
    }

    train.seatsBooked += req.body.seatsBooked;
    await train.save();

    const PNR = "PNR" + Date.now();

    const booking = await Booking.create({
      userId: req.user._id,
      trainId: req.body.trainId,
      seatsBooked: req.body.seatsBooked,
      PNR,
    });

    res.status(200).json({ message: "Ticket Booked Successfully", booking });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user._id }).populate(
      "trainId",
    );
    res.status(200).json(bookings);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const cancelTicket = async (req, res) => {
  try {
    const booking = await Booking.findOne({ PNR: req.params.pnr });

    if (!booking) return res.status(404).json({ message: "Booking not Found" });

    if (booking.status == "CANCELED") {
      res.status(401).json({ message: "Ticket already cancelled" });
    }

    booking.status = "CANCELED";
    await booking.save();

    const train = await Train.findById(booking.trainId);
    train.seatsBooked -= booking.seatsBooked;
    await train.save();
    return res.status(200).json({
      message: "Ticket Cancelled Successfully",
      currentStatus: booking.status,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
