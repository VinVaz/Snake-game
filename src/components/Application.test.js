const Application = require("./Application")
// @ponicode
describe("componentDidMount", () => {
    let inst

    beforeEach(() => {
        inst = new Application.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
