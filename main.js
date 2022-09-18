/* const myHeading = document.querySelector('h1');
myHeading.textContent = "Hello World!";
*/

const myImage = document.querySelector('img');

myImage.onclick = function() {
  const mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/index2.jpeg') {
    myImage.setAttribute ('src','images/index.jpeg');
  } else {
    myImage.setAttribute ('src','images/index2.jpeg');
  }
}

// Personalized welcome message code

const myButton = document.querySelector('button');
const myHeading = document.querySelector('h1');

function setUserName() {
  const myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = `Mozilla is cool, ${myName}`;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  const storedName = localStorage.getItem('name');
  myHeading.innerHTML = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = function() {
  setUserName();
}