
// Make the code more readeable
// Pick up calculation errors
// Make the code robust so that the calculation is not performed when a wrong unit of measure is passed

// Given Parameters
const vel = 10000; // velocity (km/h)
const acc = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const d = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fbr = 0.5; // fuel burn rate (kg/s)

//const vel2 = vel + (acc * time) //calculates new velocity based on acceleration
const d2 = d + (vel*time) //calcultes new distance
const rf = fbr*time //calculates remaining fuel

calcNewVel = (vel, acc, time) => {
  return vel + (acc*time)
}


const vel2 = calcNewVel(acc, vel, time)

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);






