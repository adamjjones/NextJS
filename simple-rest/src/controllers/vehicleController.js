const vehicleModel = require("../models/vehiclesModel");

exports.getVehicleController = (req, res, next) => {
  const vehicles = vehicleModel.getVehicles();
  res.json(vehicles);
};