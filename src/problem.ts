const arr:number[] = [6, 13, 22, 18, 0, 3, 45, 57, 51, 5, 12, 55, 60];

export const secondLargestElement1 = (arr: number[] | undefined): number | string => {
    if(!arr){
        return "Please pass an array";
    }
    if(arr.length < 1){
        return "Please pass an array with at least 1 elements";
    }
    //Set the arrays first element as the maximum
    let firstMax:number = arr[0];

    //declaring the minimum integer value;
    let secondMax: number = (Number as any).MIN_SAFE_INTEGER;

    //Looping the array.
    for (const ele of arr) {
        // if the current element is greater than the maximum element
        // then we are assigning the current element as the maximum element
        //also we are checking the secondmax element.
        if(ele > firstMax){
            secondMax = firstMax;
            firstMax = ele;
        }else if (ele > secondMax && ele < firstMax) {
            secondMax = ele;
        }
    }
    if (secondMax === (Number as any).MIN_SAFE_INTEGER) {
        return "no second max element founded";
    }


    return secondMax;
}

export const secondLargestElement2 = (arr: number[] | undefined): number | string => {
    if(!arr){
        return "Please pass an array";
    }
    if(arr.length < 1){
        return "Please pass an array with at least 1 elements";
    }
    // declaring the  first minimum integer value;
    let firstMax: number = (Number as any).MIN_SAFE_INTEGER;
    // declaring the second  minimum integer value;
    let secondMax: number = (Number as any).MIN_SAFE_INTEGER;

    for (const ele of arr) {
        if (ele > firstMax) {
            secondMax = firstMax;
            firstMax = ele;
        } else if (ele > secondMax && ele !== firstMax) {
            secondMax = ele;
        }
    }

    if (secondMax === (Number as any).MIN_SAFE_INTEGER) {
        return "no second max element founded";
    }

    return secondMax;
}

console.log(secondLargestElement1(arr));
console.log(secondLargestElement2(arr));