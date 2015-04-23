function assert(predicate, message) {
  if (!predicate) {
    throw new Error(message);
  }
}

function startTimer() {
  return +new Date()
}

function stopTimer(timer) {
  return +new Date() - timer
}

var Queue = require('../')

function testSequential(n) {
  var q = Queue()
  var timer = startTimer()

  for (var i = 0; i <= n; i++) {
    q.enqueue({ a: i, 'some string': 'some value'+i})
  }

  for (i = 0; i <= n; i++) {
    var val = q.dequeue()
    if (val['some string'] !== 'some value'+i) {
      err = ['wrong handling!', '\nexpected: ', 'some value' + i, '\nGot: ', val['some string']];
      throw new Error(err.join(''));
    }
  }
  var total = stopTimer(timer)
  console.log('Testing sequential on ' + n + ' objects: ' + total + ' ms')
}

function testThreeInRow(n) {
  var q = Queue()
  var timer = startTimer()

  for (var i = 1; i <= n; i++) {
    q.enqueue({ a: i, 'some string': 'some value'})

    if (i % 3) {
      q.dequeue()
      q.dequeue()
      q.dequeue();
    }
  }
  var total = stopTimer(timer);
  console.log('Testing Three-In-Row on ' + n + ' objects: ' + total + ' ms')

}

for (var i = 2; i < Math.pow(2, 24); i = 2 * i) {
  testThreeInRow(i)
  testSequential(i)
}
