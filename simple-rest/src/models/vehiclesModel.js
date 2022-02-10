const vehicles = [
  { make: "Ford", model: "Transit Connect", year: 2020, color: 'blue' },
  { make: "Toyota", model: "Highlander", year: 2018, color: 'blue' },
  { make: "Toyota", model: "Corolla", year: 2002, color: 'tan' },
  { make: "Acura", model: "ILX", year: 2016, color: 'white' },
  { make: "Hyundai", model: "Elantra", year: 2013, color: 'silver' },
  { make: "Kia", model: "Forte", year: 2019, color: 'black' },
  { make: "Dodge", model: "RAM", year: 2004, color: 'orange' }
];
//Allow the Controller to access and fetch the meals meanu
exports.getVehicles = () => {
  return vehicles;
};