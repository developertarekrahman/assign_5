1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:
1. getElementById is something that we can find a element with an ID , this id must be unique. We select only one element with one ID at a time.
2. getElementByClassName is something we can find multiple elements with the same class name. We can select multiple elements with one class name.
3. wuerySelectior/querySelectorAll is something that we can select elements with css selectior .Here querySelector give us the first elemest with
   selector and the querySelectorAll give us all elements with the selected selector.

2. How do you create and insert a new element into the DOM?

Answer: For creating a new element I use into the DOM is document.createNewElement() and for inserting new elements I use append.child or insertBefore.

3.What is Event Bubbling and how does it work?

Answer:A Event Bubbles is a process where if we target an element and it start then it bubbles up through its ancestor  and reach its root.
It's work like a tree.When we choose choose an element assume we choose the child node. When we start the Bubbling we reach it parent node
then parent node of the parent node , we will bubble up until we don't reach to root.

4.What is Event Delegation in JavaScript? Why is it useful?

Answer: Event Delegation is a pattern based upon the concept of Event Bubbling. It is an event-handling pattern that allows you to handle
events at a higher level in the DOM tree other than the level where the event was first received.
Event Delegation is a useful pattern that allows you to write cleaner code, and create fewer event listeners with similar logic.

5.What is the difference between preventDefault() and stopPropagation() methods?

Answer: preventDefault() Method: prevents the browser from executing the default behavior of the selected element.
Stop propagation() event method: this method is used to prevent the propagation of the same event from being called.
