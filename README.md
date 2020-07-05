# shuffle-obj-arrays

[![Version](https://img.shields.io/npm/v/shuffle-obj-arrays)](https://img.shields.io/npm/v/shuffle-obj-arrays?label=Version)
[![Build Status](https://travis-ci.org/thiagodp/shuffle-obj-arrays.svg?branch=master)](https://travis-ci.org/thiagodp/shuffle-obj-arrays)
[![Known Vulnerabilities](https://snyk.io/test/github/thiagodp/shuffle-obj-arrays/badge.svg?targetFile=package.json)](https://snyk.io/test/github/thiagodp/shuffle-obj-arrays?targetFile=package.json)

> Shuffles the arrays of the given (object) map using [shuffle-array](https://github.com/pazguille/shuffle-array).

## Install

```bash
npm install shuffle-obj-arrays
```

## Example

```javascript
const shuffleObjArrays = require( 'shuffle-obj-arrays' );

console.log(
	shuffleObjArrays( {
		"foo": [ "x", "y" ],
		"bar": [ "a", "b", "c", "d" ],
		"baz": [ "f", "g" ]
	} )
);
```
It will print something like:
```json
{
    "foo": [ "y", "x" ],
    "bar": [ "c", "b", "a", "d" ],
    "baz": [ "g", "f" ]
}
```

## Version 1

### API

Version 1 accepts the same options as [shuffle](https://github.com/pazguille/shuffle-array#shufflearr-options), plus `copyNonArrays`.

Syntax:
```typescript
shuffleObjArrays(
	obj: object,
	options: { copy: false, copyNonArrays: false },
	rng: (n: number): number = Math.random
): object
```

Randomizes the order of the elements in all arrays of the given object.

- `obj` {object} - The given object.
- `options` {object} - Options, which may have:
  - `copy` {boolean} - `true` to copy the given object. Defaults to `false`.
  - `copyNonArrays` {boolean} - `true` to copy non-array properties of the given object. Only works when `copy` is `true`. Defaults to `false`.
  - `rng` {function} - Custom random number generator. Defaults to `Math.random`.

### Example:

```javascript
const shuffleObjArrays = require( 'shuffle-obj-arrays' );

// Using a external pseudo-random number generator
// https://github.com/davidbau/seedrandom
const seedrandom = require( 'seedrandom' );

const options = {
    copy: true,
    rng: seedrandom( 'my seed' )
};

console.log(
	shuffleObjArrays(
		{
			"foo": [ "x", "y" ],
			"bar": [ "a", "b", "c", "d" ],
			"baz": [ "f", "g" ],
			"zoo": "non array property"
		},
		options
	)
);
```
It returns something like:
```json
{
    "foo": [ "y", "x" ],
    "bar": [ "c", "b", "a", "d" ],
    "baz": [ "g", "f" ]
}
```

## See also

- [shuffle-array](https://github.com/pazguille/shuffle-array) - Shuffles an array using [Fisher-Yates algorithm](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle) and allows to pass a custom pseudo-random number generator (PRNG)
- [seedrandom](https://github.com/davidbau/seedrandom) - Predictive PRNG
- [one-wise](https://github.com/thiagodp/one-wise) - One-wise combinatorial testing for the arrays of the given object.


## License

[MIT](LICENSE) © [Thiago Delgado Pinto](https://github.com/thiagodp)
