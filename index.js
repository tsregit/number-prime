require('./loaders/dotenv')
const { LOWER_NUMBER } = require('./config')
const logger = require('./loaders/logger')
const prompt = require('./loaders/prompt')
const primerNumberSchema = require('./schema/primerNumber')
const { generate } = require('./helpers/primeNumber.helper');

// Call generate method to init app
(async () => {
  await generate({ prompt, primerNumber: { schema: primerNumberSchema, valueLowerNumber: LOWER_NUMBER }, logger })
})()
