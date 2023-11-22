let strings = ['ab','ab','abc']
let queries = ['ab','abc','bc']

function matchingStrings(strings, queries) {
    // Write your code here
    let result = []
    queries.forEach((item) => {
        let i = 0
        strings.forEach((str) => {
            if(item === str)
                i++
        })
        result.push(i)
    })
return result
}

console.log(matchingStrings(strings,queries))