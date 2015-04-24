var dsQueue = function() {
  var head = null,
      tail = null,
      len = 0

  function enqueue(obj) {
    var node = { val: obj, next: null }
    
    if (len > 0) {
      tail.next = node
    }    
    else {
      head = node
    }
    
    tail = node
    len += 1

    return obj
  }

  function dequeue(obj) {
    var res

    if (head != null) {
      res = head.val
      head = head.next
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
        n = n.next
      }

      return arr
    },
  }

  Object.defineProperty(interface, 'length', {
    get: function() {
      return len
    },
  })

  return interface
}

module.exports = dsQueue
