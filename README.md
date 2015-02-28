# make-overridable [![npm version](http://img.shields.io/npm/v/make-overridable.svg?style=flat-square)](https://www.npmjs.org/package/make-overridable)

> [Override design pattern][override] for JavaScript.

[override]: http://lethalman.blogspot.fr/2014/09/nix-pill-14-override-design-pattern.html

Example
-------

```js
const { makeOverridable } = require('make-overridable')

const a = makeOverridable(x => x)({
  foo: 'a',
  bar: 'a',
})

a.foo === 'a'
a.bar === 'a'

const b = a.override({ foo: 'b' })

b.foo === 'b'
b.bar === 'a'

const c = b.override({ bar: 'c' })

b.foo === 'b'
b.bar === 'c'
```
