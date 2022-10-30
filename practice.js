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

//Thinkful - Logic Drills: Traffic light
function updateLight(current) {
  return current == 'green' ? 'yellow' : current == 'yellow' ? 'red' : 'green';
}

//Reversed sequence
function reverseSeq(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = reverseSeq(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}

//The Feast of Many Beasts
function feast(beast, dish) {
  return beast[0] == dish[0] && beast[beast.length - 1] == dish[dish.length - 1]
    ? true
    : false;
}
