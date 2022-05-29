// 1st function
const combineWords = (word1, word2) => `${word1} ${word2}`

// 2nd function
const getLetter = (word,positon) => word.charAt(positon-1)

// 3rd function
const buildEvenRange = (start, end) => {
    let subArray = []
    if (start < end) {
        let evenArray = []
        for(let i = start; i <= end; i++){
            if(i%2 === 0){
                subArray.push(i);
                evenArray.push(subArray.slice(0));
            }
        }
        const Array = evenArray.splice(-1)
        return Array[0]
    } else return subArray
}

module.exports = {combineWords, getLetter, buildEvenRange}