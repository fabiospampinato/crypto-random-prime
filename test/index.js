
/* IMPORT */

import isPrime from 'crypto-prime-test';
import {describe} from 'fava';
import random from '../dist/index.js';

/* MAIN */

describe ( 'Crypto Random Prime', it => {

  it ( 'can generate a big-ish random prime number', t => {

    const n = random ( 50, 16 );

    t.is ( isPrime ( n ), true );

  });

});
