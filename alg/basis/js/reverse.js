function CList(val, next = null) {
  this.val = val
  this.next = next
}
function reverse(head) {
  if(head == null) {
    return null
  }
  var result = CList(head.val)
  var cur = head

  var dummy
  while(cur.next != null) {
    dummy = cur.next
    cur.next = dummy.next
    dummy.next = result
    result = dummy
  }
  return result
}

const hd = CList(1, CList(2, CList(3, CList(4, CList(5)))))

console.log(hd)
console.log(reverse(hd))

