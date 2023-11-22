// find first repeat

const arr = [1,2,3,4,1,5,6,2]
let count = 0
for(let i = 0; i < arr.length; i++){
    for(let j = i+1; j < arr.length; j++){
        if(arr[i] == arr[j] && count == 0){
            count++
            console.log(arr[i])

        }
    }
}