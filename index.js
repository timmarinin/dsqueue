var dsQueue = function() {
  var head = null, tail = null, len = 0,
      firstEnqueuesStrategies = {
        0: function(node) {
            head = node
        },
        1: function(node) {
          tail = node
          tail.head = head
          head.tail = tail
        }
      }

  function enqueue(obj) {
    var node = { val: obj, head: tail, tail: null }
    
    if (len > 1) {
      tail.tail = node
      tail = node
    }    
    else {
      if (len === 0) {
        head = node
      } else {
        tail = node
        tail.head = head
        head.tail = tail
      }
    }
     
    len += 1

    return obj
  }

  function dequeue(obj) {
    var res

    if (head != null) {
      res = head.val
      head = head.tail
      len -= 1
    }

    return res
  }

  var interface = {
    enqueue: enqueue,
    dequeue: dequeue,
    examine: function() {
      var arr = [],
          n = head

      while (n !== null) {
        arr.push(n.val)
        n = n.tail
      }

      return arr
    },
  };

  Object.defineProperty(interface, 'length', {
    get: function() {
      return len
    },
  })

  return interface
}

module.exports = dsQueue
