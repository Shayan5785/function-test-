const {
    combineWords, 
    getLetter, 
    buildEvenRange
} = require('./function')


// test 1
test('should combine words', () => { 
    expect(combineWords("hello","world")).toBe("hello world")
    expect(combineWords("red","planet")).toBe("red planet")
    expect(combineWords("blue","sky")).toBe("blue sky")
 })

// test 2
test('should tell the postion of character in letter', () => { 
    expect(getLetter('Strange',1)).toBe("S")
    expect(getLetter('nice',4)).toBe("e")
    expect(getLetter('doctor',4)).toBe("t")
    expect(getLetter('purple',7)).toBe("")
    expect(getLetter('JavaScript',0)).toBe("")
 })

//  test 3
test('should check array contain even number', () => { 
    expect(buildEvenRange(2,6)).toEqual([2,4,6])
    expect(buildEvenRange(12,17)).toEqual([12,14,16])
    expect(buildEvenRange(0,4)).toEqual([0,2,4])
    expect(buildEvenRange(3,7)).toEqual([4,6])
    expect(buildEvenRange(10,9)).toEqual([])
 })

