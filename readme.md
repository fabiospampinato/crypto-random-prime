# Crypto Random Prime

Generate a cryptographically-random probable prime number that passes the Miller-Rabin test with the given number of bits of entropy.

## Install

```sh
npm install --save crypto-random-prime
```

## Usage

```ts
import random from 'crypto-random-prime';

// Generate a 300-bits random prime, performing 64 rounds of Miller-Rabin tests

random ( 300, 64 ); // => 1229897812185405005544550995303702949862219513844036076668441860571526838822977324092558451n
```

## License

MIT © Fabio Spampinato
