const rotate = () => {
    let arr = [1,2,3,4,5]
    let lastElement = arr.splice(-1)
    for(let i = 0; i < arr.length; i++){
       lastElement.push(arr[i])
    }
    return lastElement
}
const result = rotate()
console.log(result)