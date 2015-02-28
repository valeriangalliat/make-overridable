const extend = require('extend')

const merge = (...args) => extend(true, {}, ...args)
const clone = object => merge({}, object)

const makeOverridable = f => object =>
  merge(f(object), {
    override: newObject => makeOverridable(f)(merge(object, newObject))
  })

module.exports = makeOverridable
