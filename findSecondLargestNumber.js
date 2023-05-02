const arr = [1, 2, 3, 5, 4, 10, 20, 1];

let largestNum = arr[0]; // 1
let secondLargestNum;

for (let i = 0; i < arr.length; i++) {
  if (largestNum < arr[i]) {
    secondLargestNum = largestNum;
    largestNum = arr[i];
  }
  if (secondLargestNum < arr[i] && arr[i] !== largestNum) {
    secondLargestNum = arr[i];
  }
}
console.log(`largest Number: ${largestNum} and second Largest number: ${secondLargestNum}`);

function compareValue(ss) {
  let longNumber = ss[0];
  let localobj;
  ss.forEach((Num) => {
    if (longNumber < Num) {
      localobj = longNumber;
      longNumber = Num;
    }
    if (localobj < Num && Num !== longNumber) {
      localobj = Num;
    }
  });

  return `Second Largest Number ${localobj}`;
}

console.log(compareValue([1, 2, 3, 5, 4, 10, 20, 1]));
