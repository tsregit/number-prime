const { generate } = require('../helpers/primeNumber.helper')
const primerNumberSchema = require('../schema/primerNumber')

const primerNumber = {
  schema: primerNumberSchema,
  valueLowerNumber: 1
}

const logger = {
  error: jest.fn(),
  info: jest.fn()
}

describe("Prime Number", () => {
  afterEach(() => {
    jest.clearAllMocks();
  })
  describe("Init generate", () => {
    it("should error must be only number", async () => {
      const prompt = {
        get: jest.fn().mockResolvedValue({ higherNumber: "" })
      }
      await generate({ prompt, primerNumber, logger })
      expect(logger.error.mock.calls).toEqual( [[ "higherNumber must be only number and is required" ]])
    })
    it("should be required", async () => {
      const prompt = {
        get: jest.fn().mockResolvedValue({})
      }
      await generate({ prompt, primerNumber, logger })
      expect(logger.error.mock.calls).toEqual( [[ "higherNumber must be only number and is required" ]])
    })
    it("should print the numbers [ '7,5,3,2,1' ]", async () => {
      const prompt = {
        get: jest.fn().mockResolvedValue({ higherNumber: 10 })
      }
      await generate({ prompt, primerNumber, logger })
      expect(logger.info.mock.calls[1]).toEqual([ '7,5,3,2,1' ])
    })
  })
})
