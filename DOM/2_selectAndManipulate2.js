// indicate attribute or tag name in querySelector()
// const list = document.querySelector('ul'); // tag name
// const list = document.querySelector('#list'); // id
const list = document.querySelector('.list'); // class
console.log(list);

// returns all elements in the document that matches a specified css selector
const lis = document.querySelectorAll('ul li');
console.log(lis);

const listItems = document.querySelectorAll('.list-item');
console.log(listItems);