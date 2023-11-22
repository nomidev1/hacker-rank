const findMissingInteger = () => {
    let arr = [1,5]
    let missingElements = []
    let max = Math.max(...arr)
    let min = Math.min(...arr)
    for(let i = min; i < max; i++){
        if(arr.indexOf(i) < 0){
            missingElements.push(i)
        }
    }
    return missingElements
}
const result = findMissingInteger()
console.log(result)