const {extractNames, extractNamesAlternative} = require('./exercise2')

describe("Given an array with people data", () => {
    describe("When the extract names function is called", () => {
        test("Then it should return an array with the names of people", () => {
            const people = [
                {
                  name: 'Nicolas',
                  lastName: 'Molina',
                  age: 28
                },
                {
                  name: 'Valentina',
                  lastName: 'Molina',
                  age: 19
                },
              ]
            expect(extractNames(people)).toEqual(['Nicolas', 'Valentina']);
            expect(extractNamesAlternative(people)).toEqual(['Nicolas', 'Valentina']);
        })
    })
})
