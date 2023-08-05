
/* IMPORT */

import benchmark from 'benchloop';
import random from '../dist/index.js';

/* MAIN */

benchmark.config ({
  iterations: 10
});

for ( const k of [4, 40, 400] ) {

  benchmark ({
    name: `10-bits x${k}`,
    fn: () => {
      random ( 10, k );
    }
  });

  benchmark ({
    name: `100-bits x${k}`,
    fn: () => {
      random ( 100, k );
    }
  });

  benchmark ({
    name: `1000-bits x${k}`,
    fn: () => {
      random ( 1000, k );
    }
  });

}

benchmark.summary ();
