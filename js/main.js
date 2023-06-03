const intro = document.querySelector('#intro');
const displayName = document.querySelector('#displayName');

// changing background color and text color of intro
setTimeout(() => {
    intro.classList.remove('bg-black-subtle');
    intro.classList.remove('text-white');
    intro.classList.add('bg-light');
    intro.classList.add('text-dark');
}, 4000);

displayIntro();

function displayIntro() {
    setTimeout(() => {
        displayName.innerHTML = '<br>';
    },250);
    setTimeout(() => {
        displayName.innerHTML = 'e';
    },500);
    setTimeout(() => { 
        displayName.innerHTML += 'c';
    },700);
    setTimeout(() => {
        displayName.innerHTML += 'h';
    },900);
    setTimeout(() => {
        displayName.innerHTML += 'o';
    },1100);
    setTimeout(() => {
        displayName.innerHTML += ' $';
    },1300);
    setTimeout(() => {
        displayName.innerHTML += 'n';
    },1500);
    setTimeout(() => {
        displayName.innerHTML += 'a';
    },1700);
    setTimeout(() => {
        displayName.innerHTML += 'm';
    },1900);
    setTimeout(() => {
        displayName.innerHTML += 'r';
    },2100);
    setTimeout(() => {
        displayName.innerHTML += ';';
        displayName.classList.add('error-code');
    },2300);        
    setTimeout(() => {
        // remove error effects
        displayName.classList.add('text-danger');
        displayName.classList.remove('error-code');
        displayName.innerHTML = 'undefined';
    },2700);
    setTimeout(() => {
        displayName.classList.remove('text-danger');
        displayName.innerHTML = 'ec';
    },3500);
    setTimeout(() => {
        displayName.innerHTML += 'ho';
    },3600);
    setTimeout(() => {
        displayName.innerHTML += ' $';
    },3700);
    setTimeout(() => {
        displayName.innerHTML += 'name';
    },3800);
    setTimeout(() => {
        displayName.innerHTML += ';';
    },3900);
    setTimeout(() => {
        displayName.innerHTML = '';
        displayMyName();
    },4500);
}

function displayMyName() {
    let myName = ['M', 'o', 't', 'i', ' A', 'b', 'e', 'b', 'e'];

    let i = 0;
    let intervalId = setInterval(() => {
        displayName.innerHTML += myName[i];
        i++;
        if (i == myName.length) {
            clearInterval(intervalId);
        }
    }, 200);
}

// const home = document.querySelector('#home');
// const about = document.querySelector('p');
// const skills = document.querySelector('#skills');

// // isinviewport function
// function isInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= window.innerHeight &&
//       rect.right <= window.innerWidth
//     );
//   }

// // add animation function
// const addAnimation = () => {
//     if (isInViewport(home)) {
//         console.log('in viewport');
//         about.classList.add('animate__animated');
//         about.classList.add('animate__zoomIn');
//     } else {
//         about.classList.remove('animate__animated');
//         about.classList.remove('animate__zoomIn');
//     }    
// }

// window.addEventListener('scroll', addAnimation);
