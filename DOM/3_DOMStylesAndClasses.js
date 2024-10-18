const heading = document.getElementById('heading');
heading.className = 'changeBG';     // assign class to the element
heading.className += ' changeFT';   // add a new class to the element
// heading.style.color = 'red';
// if css property contains multiple words, use camel case becuase hyphen (-) cannot be used in js
heading.style.backgroundColor = 'green'; // background-color

console.log(heading.classList); // prints 'changeBG' and 'changeFT'

heading.classList.add('changeCL');
heading.classList.remove('changeCL');

const lis = document.querySelectorAll('ul li');
console.log(lis);

for(let i=0; i<lis.length; i++){
    lis[i].style.backgroundColor = 'royalblue';
}

lis[0].style.cssText = 'background-color: coral; color: white; font-size: 25px';