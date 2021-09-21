const CategoryList = require("./CategoryList")
// @ponicode
describe("CategoryList.default", () => {
    test("0", () => {
        let callFunction = () => {
            CategoryList.default({ list: ["a", "b", "043", "holasenior"] })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            CategoryList.default({ list: ["foo bar", -0.353, "**text**", 4653] })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            CategoryList.default({ list: [-1, 0.5, 1, 2, 3, 4, 5] })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            CategoryList.default({ list: [10, -45.9, 103.5, 0.955674] })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            CategoryList.default(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
