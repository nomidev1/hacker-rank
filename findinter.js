let findIntersection = () => {
    let arr1 = [1,2,3,4]
    let arr2 = [1,1,2,2]
    let interArr = arr1.filter((element) => {
        return arr2.includes(element)
    })
    let inter = [... new Set(interArr)].reverse()
    return inter
}
const intersection = findIntersection()
console.log(intersection)