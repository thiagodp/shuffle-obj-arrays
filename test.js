const test = require( 'ava' );
const shuffle = require( '.' );

const fakeRandom = () => 0.2;

test( 'an object without properties returns an empty object array', t => {
    const r = shuffle( {} );
    t.deepEqual( r, {} );
} );

test( 'an object with a single property returns the same object with the array shuffled', t => {
    const options = { rng: fakeRandom };
    const r = shuffle(
        { "A": [ 1, 2 ] },
        options
    );
    t.deepEqual( r, { "A": [ 2, 1 ] } );
} );


test( 'does not touch non-array values by default', t => {
    const options = { rng: fakeRandom };
    const r = shuffle(
        {
            "A": [ 1, 2 ],
            "B": "non array"
        },
        options
    );
    t.deepEqual( r, { "A": [ 2, 1 ], "B": "non array" } );
} );

test( 'does not copy non-array properties by default', t => {
    const fakeRandom = () => 0.1;
    const options = { rng: fakeRandom, copy: true };
    const r = shuffle(
        {
            "A": [ 1, 2 ],
            "B": "non array"
        },
        options
    );
    t.deepEqual( r, { "A": [ 2, 1 ] } );
} );

test( 'allows to copy non-array properties', t => {
    const fakeRandom = () => 0.1;
    const options = { rng: fakeRandom, copy: true, copyNonArrays: true };
    const r = shuffle(
        {
            "A": [ 1, 2 ],
            "B": "non array"
        },
        options
    );
    t.deepEqual( r, { "A": [ 2, 1 ], "B": "non array" } );
} );

test( 'an object with more than one property returns the same object with arrays shuffled', t => {
    const fakeRandom = () => 0.1;
    const options = { rng: fakeRandom };
    const r = shuffle(
        {
            "A": [ 1, 2 ],
            "B": [ 2, 1 ],
            "C": [ 4, 5, 6 ],
            "D": "non array"
        },
        options
    );

    t.deepEqual( r, {
        "A": [ 2, 1 ],
        "B": [ 1, 2 ],
        "C": [ 5, 6, 4 ],
        "D": "non array"
    } );
} );