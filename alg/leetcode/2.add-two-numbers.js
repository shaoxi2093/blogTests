/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let l1Now = l1;
  let l2Now = l2;
  let addOne = 0;
  let prev = null;
  let result = null;
  while (l1Now || l2Now || addOne) {
    let sum = (l1Now ? l1Now.val : 0) + (l2Now ? l2Now.val : 0) + addOne;

    addOne = sum > 9 ? 1 : 0

    const cur = new ListNode(sum % 10);
    if (prev) {
      prev.next = cur;
    } else {
      result = cur;
    }
    prev = cur;
    l1Now = l1Now ? l1Now.next : null;
    l2Now = l2Now ? l2Now.next : null;
  }
  return result;
};
// @lc code=end
