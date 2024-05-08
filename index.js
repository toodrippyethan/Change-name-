// Given Parameters
const initialVelocity = 10000; // velocity in km/h
const acceleration = 3; // acceleration in m/s^2
const timeInSeconds = 3600; // time in seconds (1 hour)
const initialDistance = 0; // initial distance in km
const initialFuel = 5000; // initial fuel in kg
const fuelBurnRate = 0.5; // fuel burn rate in kg/s

// Function to calculate new velocity based on acceleration
const calcNewVel = (initialVelocity, acceleration, timeInSeconds) => {
  const velocityInMetersPerSecond = initialVelocity * (1000 / 3600); // Convert velocity to m/s
  const newVelocity = velocityInMetersPerSecond + acceleration * timeInSeconds;
  return newVelocity * (3600 / 1000); // Convert velocity back to km/h
}

//Calculating new velocity
const newVelocity = calcNewVel(initialVelocity, acceleration, timeInSeconds);

// Calculating new distance
const newDistance = initialDistance + (initialVelocity * timeInSeconds / 3600);

//Calcyulating remaining fuel
const remainingFuel = initialFuel - (fuelBurnRate * timeInSeconds);

// Outputting results
console.log(`New Velocity: Approximately ${newVelocity.toFixed(2)} km/h after correction.`);
console.log(`New Distance: Approximately ${newDistance.toFixed(2)} km after correction.`);
console.log(`Remaining Fuel: Approximately ${remainingFuel.toFixed(2)} kg after correction.`);
