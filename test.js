const assert = require('assert')
const extend = require('extend')
const makeOverridable = require('./')

const a = makeOverridable(x => extend(x, { foo: 'foo' }))({ a: 'a' })

assert.equal(a.a, 'a')
assert.equal(a.foo, 'foo')

const b = a.override({ a: 'b', b: 'b' })

assert.equal(b.a, 'b')
assert.equal(b.b, 'b')
assert.equal(b.foo, 'foo')

const c = b.override({ a: 'c' })

assert.equal(c.a, 'c')
assert.equal(c.b, 'b')
assert.equal(c.foo, 'foo')
