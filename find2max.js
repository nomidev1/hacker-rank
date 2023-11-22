let findSecondMax = () => {
    let arr = [1,2,8,7,10,9,11,15]
    let max = Math.max(...arr)
    arr.splice(arr.indexOf(max), 1)
    return Math.max(...arr)
}
const result = findSecondMax()
console.log(result)

let find2MAx = () => {
    let arr = [1,2,8,5]
    let max = Math.max(...arr)
    arr.splice(arr.indexOf(max),1)
    return Math.max(...arr)
}