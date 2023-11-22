// Given the scores for a season, determine the number of times Maria breaks her records
//for most and least points scored during the season.
// find how many times maria broke her score.


let scores = [12,24,10,24]

function breakingRecords(scores) {
    // Write your code here
    let currentHigh = scores[0]
    let currentLow = scores[0]
    let highCount = 0
    let lowCount = 0
    for(let i = 0; i < scores.length; i++){
        if(scores[i] > currentHigh){
            currentHigh = scores[i]
            highCount++
        }else if (scores[i] < currentLow) {
            currentLow = scores[i]
            lowCount++
        }
    }
    return [highCount,lowCount]
}

console.log(breakingRecords(scores))