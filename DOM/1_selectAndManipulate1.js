const heading = document.getElementById('heading');
console.log(heading);

const list = document.getElementById('list');
console.log(list.textContent) // returns list of elements
list.textContent = 'Hi there'; // entire content (array) is replaced with text

console.log(list.innerHTML); // returns content of the url element
list.textContent = '<h1>Hi there</h1>'; // changes the text content
