/**
 * Function to generate number primes with injection by dependence to facilitate Test TDD
 * @param prompt
 * @param primerNumber
 * @param logger
 */
const generate = async ({ prompt, primerNumber, logger }) => {
  const { schema, valueLowerNumber } = primerNumber
  const { higherNumber } = await prompt.get(schema)
  const result = listPrimes(higherNumber, valueLowerNumber, logger)
  if (result && result.length) {
    logger.info(result.reverse().toString())
  } else {
    logger.error(schema.properties.higherNumber.message)
  }
}

/**
 * Function to list all number primes
 * @param higherNumber
 * @param lowerNumber
 * @param logger
 * @returns {[]}
 */
const listPrimes = (higherNumber, lowerNumber, logger) => {
  const primes = []
  if (!higherNumber) return []
  logger.info(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`)
  for (let i = lowerNumber; i <= higherNumber; i++) {
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

module.exports = {
  generate
}
