//Task 1. Return Negative
function makeNegative(num) {
  return num > 0 ? -num : num;
}

//Task 2. Even or Odd
function evenOrOdd(number) {
  return number % 2 ? 'Odd' : 'Even';
}

//Task 3. Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distanceToPump ? true : false;
};

//Task 4. Thinkful - Logic Drills: Traffic light
function updateLight(current) {
  return current == 'green' ? 'yellow' : current == 'yellow' ? 'red' : 'green';
}

//Task 5. Reversed sequence
function reverseSeq(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = reverseSeq(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}

//Task 6. The Feast of Many Beasts
function feast(beast, dish) {
  return beast[0] == dish[0] && beast[beast.length - 1] == dish[dish.length - 1]
    ? true
    : false;
}

//Task 7. Are You Playing Banjo?
function areYouPlayingBanjo(name) {
  return name[0] == 'R' || name[0] == 'r'
    ? name + ' plays banjo'
    : name + ' does not play banjo';
}

//Task 8. Volume of a Cuboid
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}

//Task 9. Area or Perimeter
const areaOrPerimeter = function (l, w) {
  return l === w ? l * w : 2 * (l + w);
};

//Task 10. Keep Hydrated!
function litres(time) {
  return Math.floor(time * 0.5);
}

//Task 11. Is he gonna survive?
function hero(bullets, dragons) {
  return bullets / 2 >= dragons ? true : false;
}
