// two sum Let's assume the input is:

array = [1, 3, 10, 11, 14]
goal = 25

const twoSum = (array, goal) => {
    let indexs = []
    for(let i = 0 ; i < array.length; i++){
        for(let j = i+1 ; j < array.length; j++){
            if(array[i] + array[j] === goal){
                indexs.push(array[i])
                indexs.push(array[j])
            }else{
                throw Error("no matching number found ");
            }
        }
    }
    return indexs
}
const result = twoSum(array, goal)
console.log(result)