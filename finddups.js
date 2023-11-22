let arr = [1,2,3,8,2,3,0]
let newArr = []
for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
        if(arr[i] === arr[j]){
        newArr.push(arr[i])
        }
    }
}
console.log(newArr)

// const arr = [1,2,3,4,5,2,3,6,4]
// const findDups = (arr) => {
//   let dupArr = []
//   let newArr = []
//   for(let i = 0; i < arr.length; i++){
//     if(!newArr.includes(arr[i])){
//         newArr.push(arr[i])
//     }else{
//         dupArr.push(arr[i])
//     }
//   }
//   return newArr
// }
// const result = findDups(arr)
// console.log(result)