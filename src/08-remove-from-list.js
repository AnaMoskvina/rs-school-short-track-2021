/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */
function removeKFromList(l, k) {
  let result = l;
  let current = l;
  let previous = null;
  while (current) {
    const oldCurrent = current;
    const oldNext = current.next;
    if (current.value === k) {
      if (previous === null) {
        current = oldCurrent.next;
        oldCurrent.next = null;
        result = current;
      } else {
        current.next = null;
        previous.next = oldNext;
        current = oldNext;
      }
    } else {
      current = oldCurrent.next;
      previous = oldCurrent;
    }
  }
  return result;
}

module.exports = removeKFromList;
