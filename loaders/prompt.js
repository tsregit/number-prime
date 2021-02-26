const prompt = require('prompt')

try {
  const optimist = require('optimist')
  prompt.override = optimist.argv
} catch (err) {
  throw new Error([
    'You need to install optimist before this example will work!',
    'Try: `npm install optimist`.'
  ].join('\n'))
}

prompt.start()

module.exports = prompt
