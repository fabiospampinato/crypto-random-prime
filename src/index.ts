
/* IMPORT */

import isProbablyPrime from 'crypto-miller-rabin';
import randomBigInt from 'crypto-random-bigint';

/* MAIN */

const randomPrime = ( bits: number, k: number = 8 ): bigint => {

  let n = randomBigInt ( bits );

  if ( ( n & 1n ) === 0n ) { // Even number

    n += 1n; // Next odd number

  }

  while ( true ) {

    if ( isProbablyPrime ( n, k ) ) return n;

    n += 2n; // Next odd number

  }

};

/* EXPORT */

export default randomPrime;
