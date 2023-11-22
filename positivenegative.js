let arr = [-4,1,2,3,-1,-2,-3]
let positiveArr = []
let negativeArr = []
for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
        positiveArr.push(arr[i])
    }else{
        negativeArr.push(arr[i])
    }
}
console.log(positiveArr)
console.log(negativeArr)