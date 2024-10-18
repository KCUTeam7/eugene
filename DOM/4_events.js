const heading = document.querySelector('.heading');
const btn = document.querySelector('.btn');

// btn.onclick = () => {
//     console.log('Clicked');
// };

// btn.onmouseover = () => {
//     heading.style.backgroundColor = 'green';
// }

// btn.onmouseout = () => {
//     heading.style.backgroundColor = 'transparent';
// }

// function clickMe(){
//     console.log('Clicked');
// }

// // addEventListener(event, function)
// btn.addEventListener('click', () => {
//     heading.style.cssText = 'background-color: brown; color: white';
// });

// e gives information of the event
btn.addEventListener('click', e => {
    // console.log(e);
    console.log(e.target); // returns content of the target
});