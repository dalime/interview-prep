/////////////////////////////////////
////// ITERATIVE BINARY SEARCH //////
/////////////////////////////////////

// PLAIN TEXT //
// [ 0 ] [ 2 ] [ 4 ] [ 6 ] [ 8 ] [ 10 ] [ 12 ] [ 14 ] [ 16 ] 
// What is the key where "12" is located?
// Low starts at index 0, high is index of length of array - 1
// While low is less than mid, keep looping
// If the # to find = array item at mid, return mid
// If the # to find is less than array item at mid, set high to mid - 1
// If the # is higher than array item at mid, set low to mid + 1
// If loop exits, the # wasn't found; return -1

const binarySearch = (arr, key) => {
    let low = 0;
    let high = arr.length - 1;
  
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] === key) {
            return mid;
        } 
        
        if (key < arr[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    
    return -1;
};

// EXAMPLES
let arrToSearch = [1, 6, 8, 13, 27, 44, 96];
console.log('Index where 8 is found is: ', binarySearch(arrToSearch, 8));
console.log('Index where 6 is found is: ', binarySearch(arrToSearch, 6));
console.log('Index where 96 is found is: ', binarySearch(arrToSearch, 96));