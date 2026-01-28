=========================================STACK=============================================

A Stack is a linear data structure that follows the
LIFO principle: Last In, First Out


----------------------------------------------------CORE CONCEPT----------------------------------------------------

Think of a stack like a pile of plates:

    - You add plates to the top
    - You remove plates from the top
    - You cannot remove plates from the middle

Only the TOP element is accessible at any time.


----------------------------------------------------BASIC OPERATIONS----------------------------------------------------

push(item)
    Adds an element to the top of the stack

pop()
    Removes and returns the top element

peek()
    Returns the top element without removing it

clear()
    Removes all elements from the stack

isEmpty()
    Checks if the stack is empty

size()
    Returns the number of elements in the stack

----------------------------------------------------STACK VISUALIZATION----------------------------------------------------

    TOP
     |
     v
    +-----+
    |  C  |   <-- last pushed
    +-----+
    |  B  |
    +-----+
    |  A  |   <-- first pushed
    +-----+


----------------------------------------------------COMMON USE CASES----------------------------------------------------

- Function calls (call stack)
- Undo / Redo operations
- Expression evaluation
- Backtracking algorithms
- Browser history navigation


----------------------------------------------------TIME COMPLEXITY----------------------------------------------------

push   : O(1)
pop    : O(1)
peek   : O(1)
search : O(n)


----------------------------------------------------SUMMARY----------------------------------------------------

✔ Simple and efficient
✔ Restricted access (top only)
✔ Ideal when order of operations matters

