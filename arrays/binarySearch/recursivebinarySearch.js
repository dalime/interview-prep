/////////////////////////////////////
////// RECURSIVE BINARY SEARCH //////
/////////////////////////////////////

// PLAIN TEXT //
// [ 0 ] [ 2 ] [ 4 ] [ 6 ] [ 8 ] [ 10 ] [ 12 ] [ 14 ] [ 16 ] 
// What is the key where "12" is located?
// Low starts at index 0, high is index of length of array - 1, mid is the floor of (length of array - 1) - low
// If the # to find is less than array item at mid, recursively call the function again but set high to mid - 1
// If the # is higher than array item at mid, recursively call the function again but set low to mid + 1
// If high is less than low, return -1 (The # can't be found --> mids ran out)

const binarySearchRec = (arr, key, low, high) => {
    if (high < low) return - 1;

    let mid = low + Math.floor((high - low) / 2);
    
    if (key === arr[mid]) {
        return mid;
    } else if (key > arr[mid]) {
        return binarySearchRec(arr, key, (mid + 1), high);
    } else {
        return binarySearchRec(arr, key, low, (mid - 1));
    }
};

const binarySearch = (arr, key) => {
    return binarySearchRec(arr, key, 0, (arr.length - 1));
};

// EXAMPLES
let arrToSearch = [1, 6, 8, 13, 27, 44, 96];
console.log('Index where 8 is found is: ', binarySearch(arrToSearch, 8));
console.log('Index where 6 is found is: ', binarySearch(arrToSearch, 6));
console.log('Index where 96 is found is: ', binarySearch(arrToSearch, 96));