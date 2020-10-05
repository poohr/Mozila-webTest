let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.jpg') {
        myImage.setAttribute('src', 'images/firefox-icon2.jpg');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('あなたの名前を入力してください');
    if(!myName || myName === null) {
        setUserName();
    }
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla は素晴らしいよ' + myName;
}

if(!localStorage.getItem('name')) {
 setUserName();   
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla は素晴らしいよ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}