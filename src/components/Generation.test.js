const Generation = require("./Generation")
// @ponicode
describe("componentWillUnmount", () => {
    let inst

    beforeEach(() => {
        inst = new Generation.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentWillUnmount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
