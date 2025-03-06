let orange = document.getElementById('orange');
let green = document.getElementById('green');
let blue = document.getElementById('blue');
let black = document.getElementById('black');
let pink = document.getElementById('pink');

function ChangeBodyBg(color) {
    document.body.style.background = color;

    // Change text color for better readability
    document.body.style.color = (color === 'black') ? 'white' : 'black';
}

// Assign event listeners using the function
orange.addEventListener('click', () => ChangeBodyBg('orange'));
green.addEventListener('click', () => ChangeBodyBg('green'));
blue.addEventListener('click', () => ChangeBodyBg('blue'));
black.addEventListener('click', () => ChangeBodyBg('black'));
pink.addEventListener('click', () => ChangeBodyBg('pink'));

//*********************************************** */

// document.getElementById('orange').onclick = switchToOrange;
// document.getElementById('green').onclick = switchToGreen;
// document.getElementById('blue').onclick = switchToBlue;
// document.getElementById('black').onclick = switchToBlack;
// document.getElementById('pink').onclick = switchToPink;

// function switchToOrange() {
//   document.getElementsByTagName('body')[0].style.backgroundColor = 'orange';
//   document.getElementsByTagName('body')[0].style.color = 'white';
// }

// function switchToGreen() {
//   document.getElementsByTagName('body')[0].style.backgroundColor = 'lightgreen';
//   document.getElementsByTagName('body')[0].style.color = 'white';
// }

// function switchToBlue() {
//   document.getElementsByTagName('body')[0].style.backgroundColor = 'deepskyblue';
//   document.getElementsByTagName('body')[0].style.color = 'white';
// }

// function switchToBlack() {
//   document.getElementsByTagName('body')[0].style.backgroundColor = 'black';
//   document.getElementsByTagName('body')[0].style.color = 'white';
// }

// function switchToPink() {
//   document.getElementsByTagName('body')[0].style.backgroundColor = 'deeppink';
//   document.getElementsByTagName('body')[0].style.color = 'white';
// }

//************************************************************ */

// function ChangeBodyBg(color) {
//   document.body.style.background = color;
  
//   // Change text color based on background for better visibility
//   if (color === 'black') {
//     document.body.style.color = 'white';
//   } else {
//     document.body.style.color = 'black';
//   }
// }

// document.getElementById('orange').onclick = function() {
//   ChangeBodyBg('orange');
// };
// document.getElementById('green').onclick = function() {
//   ChangeBodyBg('lightgreen');
// };
// document.getElementById('blue').onclick = function() {
//   ChangeBodyBg('deepskyblue');
// };
// document.getElementById('black').onclick = function() {
//   ChangeBodyBg('black');
// };
// document.getElementById('pink').onclick = function() {
//   ChangeBodyBg('deeppink');
// };


//******************************************** */

// let orange = document.getElementById('orange');
// let green = document.getElementById('green');
// let blue = document.getElementById('blue');
// let black = document.getElementById('black');
// let pink = document.getElementById('pink');

// orange.addEventListener('click', function() {
//     document.body.style.backgroundColor = 'orange';
// });

// green.addEventListener('click', function() {
//     document.body.style.backgroundColor = 'green';
// });

// blue.addEventListener('click', function() {
//     document.body.style.backgroundColor = 'blue';
// });

// black.addEventListener('click', function() {
//     document.body.style.backgroundColor = 'black';
//     document.body.style.color = 'white';
// });

// pink.addEventListener('click', function() {
//     document.body.style.backgroundColor = 'pink';
// });




