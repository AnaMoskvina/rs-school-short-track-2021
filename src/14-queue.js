const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.queueSize = 0;
  }

  get size() {
    return this.queueSize;
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    newNode.value = value;
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.queueSize++;
  }

  dequeue() {
    const prevFirst = this.first;
    const newFirst = this.first.next;
    prevFirst.next = null;
    this.first = newFirst;
    return prevFirst.value;
  }
}

module.exports = Queue;
