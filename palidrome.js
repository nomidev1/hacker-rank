let value = 123
let revValue = () => {
    let myRevVal = value.toString().split('').reverse().join('')
    let curVal = value.toString()
    if(myRevVal == curVal){
        return('it is a palidrome')
    }else {
        return('it is not a palidrome')
    }
}
const result = revValue()
console.log(result)


let name = 'racecare'
let revStr = name.split('').reverse().join('')
if(name === revStr){
    console.log('it is a palindrome')
}else{
    console.log('it is not a palidrome')
}