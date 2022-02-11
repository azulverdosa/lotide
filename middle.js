const middle = (arr) => {
  let middleIndex = arr.length / 2;
  
  if (arr.length <= 2 ){
    return [];
  } else if (arr.length % 2 === 0) {
    return [arr[middleIndex - 1], arr[middleIndex]];
  } else {
    return [arr[Math.floor(middleIndex)]];
  }
}

module.exports = middle;

