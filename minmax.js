let arr = [1, 2, 3, 4, 20, 10, 3, 0]

let min = arr[0]
let max = arr[0]
for (let i = 0; i < arr.length; i++) {
  
   if(min > arr[i]){
    min = arr[i]
   }
    if(max < arr[i]){
        max = arr[i]
    }
}
console.log(max)
console.log(min)