const intro = document.querySelector('#intro');
const greetingText = document.querySelector('#greetingText')
const nameDisplay = document.querySelector('#nameDisplay');
const turningGear = document.querySelector('#turningGear')

window.onload = () => {
    turningGear.classList.add('d-none')
    greetingText.classList.remove('d-none')
    displayIntro()
    setTimeout(() => {
        intro.classList.remove('bg-black-subtle');
        intro.classList.remove('text-white');
        intro.classList.add('bg-light');
        intro.classList.add('text-dark');
    }, 4000);
}

function displayIntro() {
    setTimeout(() => {
        nameDisplay.innerHTML = '<br>';
    },250);
    setTimeout(() => {
        nameDisplay.innerHTML = 'e';
    },500);
    setTimeout(() => { 
        nameDisplay.innerHTML += 'c';
    },700);
    setTimeout(() => {
        nameDisplay.innerHTML += 'h';
    },900);
    setTimeout(() => {
        nameDisplay.innerHTML += 'o';
    },1100);
    setTimeout(() => {
        nameDisplay.innerHTML += ' $';
    },1300);
    setTimeout(() => {
        nameDisplay.innerHTML += 'n';
    },1500);
    setTimeout(() => {
        nameDisplay.innerHTML += 'a';
    },1700);
    setTimeout(() => {
        nameDisplay.innerHTML += 'm';
    },1900);
    setTimeout(() => {
        nameDisplay.innerHTML += 'r';
    },2100);
    setTimeout(() => {
        nameDisplay.innerHTML += ';';
        nameDisplay.classList.add('error-code');
    },2300);        
    setTimeout(() => {
        // remove error effects
        nameDisplay.classList.add('text-danger');
        nameDisplay.classList.remove('error-code');
        nameDisplay.innerHTML = 'undefined';
    },2700);
    setTimeout(() => {
        nameDisplay.classList.remove('text-danger');
        nameDisplay.innerHTML = 'ec';
    },3500);
    setTimeout(() => {
        nameDisplay.innerHTML += 'ho';
    },3600);
    setTimeout(() => {
        nameDisplay.innerHTML += ' $';
    },3700);
    setTimeout(() => {
        nameDisplay.innerHTML += 'name';
    },3800);
    setTimeout(() => {
        nameDisplay.innerHTML += ';';
    },3900);
    setTimeout(() => {
        // changeIntroColor();
        nameDisplay.innerHTML = '';
        displayMyName();
    },4300);
}

const displayMyName = () => {
    let myName = ['M', 'o', 't', 'i', ' A', 'b', 'e', 'b', 'e'];

    let i = 0;
    let intervalId = setInterval(() => {
        nameDisplay.innerHTML += myName[i];
        i++;
        if (i == myName.length) {
            clearInterval(intervalId);
        }
    }, 200);
}
