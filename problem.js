const arr = [6, 13, 22, 18, 0, 3, 45, 57, 51, 5, 12, 55, 60];
const secondLargestElement1 = (arr) => {
    //    first of all we are finding the maximum element from the array
    let maxOfArray = Math.max(...arr);
    // declaring the minimum integer value;
    let secondMax = Number.MIN_SAFE_INTEGER;
    for (const ele of arr) {
        // if the current element is greater than the maximum element
        // then we are assigning the current element as the maximum element
        if (ele > secondMax && ele < maxOfArray) {
            secondMax = ele;
        }
    }
    return secondMax;
}
const secondLargestElement2 = (arr) => {
    console.log("Running second approch");
    // declaring the  first minimum integer value;
    let firstMax = Number.MIN_SAFE_INTEGER;
    // declaring the second  minimum integer value;
    let secondMax = Number.MIN_SAFE_INTEGER;
    for (const ele of arr) {
        if (ele > firstMax) {
            secondMax = firstMax;
            firstMax = ele;
        } else if (ele > secondMax && ele !== firstMax) {
            secondMax = ele;
        }

    }
    if (secondMax === Number.MIN_SAFE_INTEGER) {
        return "no second max element founded";
    }
    return secondMax;
}

console.log(secondLargestElement1(arr));
console.log(secondLargestElement2(arr));