'use strict'

const vm2 = require('vm2')

const moduleCode = process.argv[3] || null
const machine = new vm2.NodeVM({
  requireExternal: true
})

let parameters = {}
let handler = null

if (!moduleCode) {
  console.error('You must pass module code to execute.')
  process.exit(1)
}

try {
  parameters = JSON.parse(process.argv[2])
} catch (parameterParseError) {
  console.error('Parameters must be a valid JSON string.')
  process.exit(1)
}

if (!parameters instanceof Object) {
  console.error('Parameters must be an object.')
  process.exit(1)
}

try {
  handler = machine.run(moduleCode)
} catch (moduleCodeParseError) {
  console.error(`Module error: ${moduleCodeParseError.message}`)
  process.exit(1)
}

machine.call(handler, parameters)
  .then(executionResponse => console.log(executionResponse))
  .catch(executionError => {
    console.error(executionError)
    process.exit(1)
  })
