// Javascript program to find the
// ratio of positive, negative, and
// zero elements in the array.

let a = [2, -1, 5, 6, 0, -3] 
function positiveNegativeZero (arr) {
    let length = arr.length
    let positiveCount = 0
    let negativeCount = 0
    let zeroCount = 0
    for(let i = 0; i < length; i++){
        if(arr[i] > 0){
            positiveCount++
        }else if(arr[i] < 0){
            negativeCount++
        }else if(arr[i] == 0){
            zeroCount++
        }
    }
    console.log((positiveCount / length).toFixed(4))
    console.log((negativeCount / length).toFixed(4))
    console.log((zeroCount / length).toFixed(4))
}
positiveNegativeZero(a)

//perfect solution
    function plusMinus(arr) {
        let positive = arr.filter(number => number > 0).length / arr.length;
        let negative = arr.filter(number => number < 0).length / arr.length;;
        let zeronums = arr.filter(number => number == 0).length / arr.length;;
        return console.log(positive.toFixed(6) + '\n' + negative.toFixed(6) + '\n' + zeronums.toFixed(6))
    }

    function minusPlus (arr) {
        let positiveCount = arr.filter(number => number > 0).length / arr.length
        let negativeCount = arr.filter(number => number < 0).length / arr.length
        let zeroCount = arr.filter(number => number == 0).length / arr.length
        return console.log(positiveCount.toFixed(6) + '\n' + negativeCount.toFixed(6) + '\n' + zeroCount.toFixed(6))
    }
    minusPlus([2, -1, 5, 6, 0, -3])