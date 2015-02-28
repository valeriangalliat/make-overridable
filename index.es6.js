const extend = require('extend')
const merge = (...args) => extend(true, {}, ...args)

const makeOverridable = f => object =>
  extend(f(merge(object)), {
    override: newObject => makeOverridable(f)(merge(object, newObject))
  })

module.exports = makeOverridable
