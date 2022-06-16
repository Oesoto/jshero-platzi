const multiplyByTwo = require('./exercise1')

describe("Given an array of numbers", () => {
    describe("When the multiply by two function is called", () => {
        test("Then it should return an array of numbers multiplied by two", () => {
            expect(multiplyByTwo([2, 4, 5, 6])).toEqual([4, 8, 10, 12]);
        })
    })
})
