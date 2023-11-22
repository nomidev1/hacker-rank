// function minMaxSum(array) {
//     var sum = array[0],
//         min = array[0],
//         max = array[0];
        
//     for (let i = 1; i < array.length; i++) {
//         sum += array[i];
//         if (min > array[i]) min = array[i];
//         if (max < array[i]) max = array[i];
//     }

//     return [sum - max, sum - min];
// }
// console.log(minMaxSum([1, 3, 5, 7, 9]));

// another way

function findMinMaxSum (arr) {
    let max = arr[0]
    let min = arr[0]
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i]
        }
        if(min > arr[i]){
            min = arr[i]
        }
        sum += arr[i]
    }
    let maxSum = sum - min
    let minSum = sum - max
    console.log(minSum + " " + maxSum)
}
findMinMaxSum([1, 3, 5, 7, 9])