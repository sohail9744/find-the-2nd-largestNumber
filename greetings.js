function uNion(arr, arr1) {
  // Create an empty object to store unique values
  const obj = {};
  // Create an empty array to store the final result
  const array1 = [];
  // Determine the length of the longer array
  const length = arr.length <= arr1.length ? arr1.length : arr.length;
  // Loop through both arrays up to the length of the longer array
  for (let i = 0, j = 0, c = 0; i < length; i++, j++) {
    // If the current value of arr[i] is not in the object and i is less than arr.length
    if (!(arr[i] in obj) && i < arr.length) {
      // Add the value to the object and array1
      obj[arr[i]] = i;
      array1[c] = arr[i];
      // Increment the counter
      // eslint-disable-next-line no-plusplus
      c++;
    }
    // If the current value of arr1[j] is not in the object and j is less than arr1.length
    if (!(arr1[j] in obj) && j < arr1.length) {
      // Add the value to the object and array1
      obj[arr[j]] = j;
      array1[c] = arr1[j];
      // Increment the counter
      // eslint-disable-next-line no-plusplus
      c++;
    }
  }
  // Return the final array1
  return array1;
}
// Call the function with two arrays as arguments and print the result to the console
console.log(uNion([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
