let findUnion = () => {
    let arr1 = [1,2,3,4,5]
    let arr2 = [1,2,2,5]
    let mergedArr = [...arr1, ...arr2]
    let union = [... new Set(mergedArr)].sort()
    return union
}
const result = findUnion()
console.log(result)