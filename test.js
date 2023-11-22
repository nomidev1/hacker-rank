let strings = ['ab','ab','abc']
let queries = ['ab','abc','bc']

const findSimiliarStr = (strings, queries) => {
      let result = []
      queries.forEach((str1) => {
        let i = 0
        strings.forEach((str2) => {
            if(str1 === str2)
                i++
        })
        result.push(i)
      })
      return result
}



const result = findSimiliarStr(strings, queries)
console.log(result)