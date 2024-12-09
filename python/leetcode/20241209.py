'''
https://leetcode.com/problems/implement-stack-using-queues/description/

Implement Stack using Queues

Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

Implement the MyStack class:

void push(int x) Pushes element x to the top of the stack.
int pop() Removes the element on the top of the stack and returns it.
int top() Returns the element on the top of the stack.
boolean empty() Returns true if the stack is empty, false otherwise.
Notes:

You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.
 

Example 1:

Input
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 2, 2, false]

Explanation
MyStack myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.top(); // return 2
myStack.pop(); // return 2
myStack.empty(); // return False
 

Constraints:

1 <= x <= 9
At most 100 calls will be made to push, pop, top, and empty.
All the calls to pop and top are valid.

'''

from collections import deque

class MyStack:
  def __init__(self):
    self.stack = deque()

  def push(self, x: int) -> None:
    input = deque([x])
    self.stack = input + self.stack

  def pop(self) -> int:
    popped = self.stack[0]
    del self.stack[0]
    return popped

  def top(self) -> int:
    return self.stack[0]

  def empty(self) -> bool:
    return len(self.stack) == 0

myStack = MyStack()

print(myStack.push(1))
print(myStack.stack)

print(myStack.push(2))
print(myStack.stack)

print(myStack.top())

print(myStack.pop())

print(myStack.empty())

'''
Pseudocode:
- Create class MyStack
- Initialize MyStack property stack as an empty deque
- push method:
  - Initialize input variable as a deque containing argument of x
  - Reassign self.stack as input + self.stack (concatenated)
  - Note: This pushes to the end of the queue
- pop method:
  - Declare popped variable and assign it the value at the end of the queue
  - Delete the value at the end of the queue
  - Return the value of popped
- top method:
  - Return the value at the at the end of the queue
- empty method:
  - Return whether the lenght of self.stack is equal to zero
'''