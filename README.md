# LinkedList

LinkedList write in JS

-   This is Doubly LinkedList written in JavaScript with some basic method

## Usage

-   Clone this file directly on your repository
-   Simply import that on the top of you .js code

```javascript
import LinkedList from "./LinkedList.js";
```

### Example

```javascript
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.remove(3);
list.display();
```

**Result**

```
1->2->null
```

## Method

I use the term "pop, shift" to make these method familiar to you

**Add**

-   append(element): Add a element to the last of the Linked List
-   prepend(element): Add a element to the first of the Linked List
-   add(element, index): Add a element to a specific index

**Remove**

-   shift(): Remove the first element, return it
-   pop(): Remove the last element, return it
-   removeAt(index): Remove the element at specific index
-   remove(element): Remove the specific element

**Search**

-   indexOf(element): Return the index of an element

**Display**

-   display(): Print the element
-   toString(): Print the element

-- You can also print the element using for..of loop due to built-in iterator

```javascript
for (let element of list) {
	console.log(element);
	// -> 1 2
}
```
