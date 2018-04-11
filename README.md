# shuffle-obj-arrays

> Shuffles the arrays of the given (object) map using [shuffle-array](https://github.com/pazguille/shuffle-array).

## Install

```bash
npm install shuffle-obj-arrays --save
```

## Example

```javascript
const shuffleObjArrays = require( 'shuffle-obj-arrays' );

shuffleObjArrays( {
    "foo": [ "x", "y" ],
    "bar": [ "a", "b", "c", "d" ],
    "baz": [ "f", "g" ]
} )
```
will return something like
```json
{
    "foo": [ "y", "x" ],
    "bar": [ "c", "b", "a", "d" ],
    "baz": [ "g", "f" ]
}
```

## API

[shuffle-obj-arrays]() accepts the same options as [shuffle](https://github.com/pazguille/shuffle-array#shufflearr-options), plus the option `copyNonArrays`.

### shuffleObjArrays( obj, [options] )

Randomizes the order of the elements in all arrays of the given object.

- `obj` {object} - The given object.
- `options` {object} - Options, which may have:
  - `copy` {boolean} - `true` to copy the given object. Defaults to `false`.
  - `copyNonArrays` {boolean} - `true` to copy non-array properties of the given object. Only works when `copy` is `true`. Defaults to `false`.
  - `rng` {function} - Custom random number generator. Defaults to `Math.random`.

Example:

```javascript
const shuffleObjArrays = require( 'shuffle-obj-arrays' );

// Using a external pseudo-random generator
// https://github.com/davidbau/seedrandom
const seedrandom = require( 'seedrandom' );
const myRng = seedrandom( 'my seed' );

const options = {
    copy: true,
    rng: myRng
};

shuffleObjArrays(
    {
        "foo": [ "x", "y" ],
        "bar": [ "a", "b", "c", "d" ],
        "baz": [ "f", "g" ],
        "zoo": "non array property"
    },
    options
);
```
will return something like
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