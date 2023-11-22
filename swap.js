// swapping values with third variable
let x = 10
let y = 20
let temp
temp = x
x = y
y = temp
console.log(x,y)

// swapping values without using the third variable
let a = 20
let b = 10
 a = a + b // 30 value of a becomes 30
 b = a - b // 20 value of b becomes 20 because value of a was 30. 30 - 10 = 20
 a = a - b // 10 value of a becomes 20 because value of a was 30 and b was 20 30 - 20 = 10
 console.log(a,b) 