var q = require('../')()

function assert(predicate, msg) {
  if (!predicate) throw new Error(msg)
}

var obj1 = { a: 1 },
    obj2 = { a: 2 },
    obj3 = { a: 3 },
    obj4 = { a: 4 },
    obj5 = { a: 5 }

q.enqueue(obj1)

assert(q.dequeue() === obj1, 'Should dequeue from head')

q.enqueue(obj1)
q.enqueue(obj2)
q.enqueue(obj3)

assert(q.dequeue() === obj1, 'Should dequeue from head')
assert(q.dequeue() === obj2, 'Should update index')
assert(q.dequeue() === obj3, 'Should update index')
