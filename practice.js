//Return Negative
function makeNegative(num) {
  return num > 0 ? -num : num;
}

//Even or Odd
function evenOrOdd(number) {
  return number % 2 ? 'Odd' : 'Even';
}

//Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distanceToPump ? true : false;
};
