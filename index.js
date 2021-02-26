require('./loaders/dotenv')
const prompt = require('./loaders/prompt')
const logger = require('./loaders/logger')
const primerNumberSchema = require('./schema/primerNumber')
const { LOWER_NUMBER } = require('./config/index')

const main = () => {
  prompt.get(primerNumberSchema, (err, result) => {
    if (err) {
      console.error(`Error: ${err}`)
    } else {
      const { higherNumber } = result
      if (!higherNumber) {
        const { properties } = primerNumberSchema
        logger.error(`Error: ${properties.higherNumber.message}`)
      } else {
        const primes = listPrimes(higherNumber)
        logger.info(primes.reverse().toString())
      }
    }
  })
}

/**
 * Function to list all number primes
 * @param higherNumber
 * @returns {[]}
 */
const listPrimes = higherNumber => {
  logger.info(`The prime numbers between ${LOWER_NUMBER} and ${higherNumber} are:`)
  const primes = []
  for (let i = LOWER_NUMBER; i <= higherNumber; i++) {
    if (isPrime(i)) primes.push(i)
  }
  return primes
}

/**
 * Function to validate if number is prime
 * @param number
 * @returns {boolean}
 */
const isPrime = (number) => {
  for (let j = 2; j < number; j++) {
    if (number % j === 0) return false
  }
  return true
}

// Call main method
main()
