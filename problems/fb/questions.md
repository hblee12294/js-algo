## Given a picture, how would you hide/show a child picture on hovering on this parent? 

I would use CSS to control it  

    .parent child {
      display: block;
    }
    
    .parent:hover child {
      display: none;
    }

## How would you ensure clicking on this picture would go to a specific link? 
1. Wrap the picture with an anchor tag.
2. add 'click' event listener to the picture.

## How would you ensure the child is positioned in the top right of the parent picture?

1. Set the child position as 'absolute', the parent should be 'relative, absolute or fixed'. Then make 'top' and 'right' to 0.
2. Using float
3. Using flex or grid layout

## Explain the concept of ES6 Promises to a 5-year-old


## difference between object and map
1. Map allows keys of any type. eg: object, number, boolean ...  
2. methods, props  
  Map:  
    set(), get(), delete(), has(), clear(), size  
    map.keys(), map.values(), map.entries()  
  Object:  
    obj[key] = value, obj[key], delete obj[key]  
    Object.keys(obj), Object.values(), Object.entries()
3. Map iterates in the insertion order. Object in that order in most cases, except the key is interger.

## difrence between forEach and map
1. forEach doesn't return anything, but map returns values as array of the same size.
2. forEach is slower than map
3. map is better for functional programming.

## difference between call and apply
1. They are both for calling function with given context and arguments. The context will be 'this' in the function.
2. The difference is that arguments in call are separated by comma, but in apply they consist of an array.

## closure
In JavaScript, every running function, code block, and the script as a whole have an associated object known as the Lexical Environment.
The lexical environment object consists of two parts:
1. Environment record - an object has all local variables as its properties
2. A reference to the outer lexical environment

`let phrase = 'hello'` - global lexical environment (outer)-> null

Function declaration unlike `let` variables, they are processed not when the execution reaches them, but when a lexical environment is created.

A function gets outer variables as they are now; it uses the most recent values.

A new function Lexical Environment is created each time a functio runs.

A function is called 'nested' when it is created inside another function.
A nested function can be returned, and it's lexical environment is still accessible.

Athough the outer function call finished, its lexical environment was remained in memory. because there's a nested function referencing it.

General: A closure is a function that remembers its outer variables and can access them.


## vanila vs framework


## difrence between array and object


## structure of DOM. fp: n nodes, what's the height.
tree structure

## event delegation

