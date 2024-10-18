const paragraph = document.querySelector('.paragraph');
console.log(paragraph.getAttribute('id'));
console.log(paragraph.getAttribute('class'));
console.log(paragraph.getAttribute('title'));

paragraph.setAttribute('style', 'background-color: coral'); // background is coral

paragraph.removeAttribute('style'); // background is back to transparent

console.log(paragraph.hasAttribute('style')); // returns false
console.log(paragraph.hasAttribute('class')); // returns true

