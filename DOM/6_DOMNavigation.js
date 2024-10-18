const listItem = document.getElementById('list-item');
const list = document.querySelector('.list');

console.log(listItem.parentNode);               // returns <ul id="list"/>
console.log(listItem.parentElement);            // returns <ul id="list"/>
console.log(listItem.parentNode.parentNode);    // returns <div class="wrapper"/>

console.log(list.childNodes);                   // returns NodeList with all items in list-item, including text 
                                                // nodes; white spaces that exist between elements
console.log(list.children);                     // returns HTMLCollection of elments ; an array-like object, 
                                                // also has length
console.log(list.firstChild);                   // returns a text node (white space)
console.log(list.firstElementChild);            // returns li element <li>Home</li>

console.log(listItem.previousSibling);          // returns a text node (white space)
console.log(listItem.nextSibling);              // returns a text node (white space)

console.log(listItem.previousElementSibling);   // returns <li>Home</li>
console.log(listItem.nextElementSibling);       // returns <li>Contact</li>