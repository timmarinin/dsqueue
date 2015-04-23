dsqueue
======

dsqueue stands for *dead-simple* queue.

## Usage

```js
var Queue = require('dsqueue'),
    q = Queue()

q.enqueue({ anyValue: true}) //add first argument to queue
q.dequeue() // { anyValue: true }

q.enqueue(3)
q.enqueue(2)
q.enqueue(1)

q.examine() // [3, 2, 1]
q.length // 3
```

## Tests

There some tests and (horribly wrong) benchmarks, run it with `npm test`
