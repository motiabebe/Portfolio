const home = document.querySelector('#intro');

setTimeout(() => {
    home.classList.remove('bg-black-subtle');
    home.classList.remove('text-white');
    home.classList.add('bg-danger');
    
    home.classList.add('bg-light');
    home.classList.add('text-dark');
}, 4000);


let displayName = document.querySelector('#displayName');

function display() {
    setTimeout(() => {
        displayName.innerHTML = '<br>';
    },500);
    setTimeout(() => {
        displayName.innerHTML = 'cout';
    },1000);
    setTimeout(() => {
        displayName.innerHTML += '<<';
    },1500);
    setTimeout(() => {
        displayName.innerHTML += 'name';
    },2000);
    setTimeout(() => {
        displayName.innerHTML += ';';
    },2500);
    setTimeout(() => {
        displayName.innerHTML = 'error, variable not found';
    },3000);
    setTimeout(() => {
        displayName.innerHTML = ' ';
        displayName.style.textdecoration = 'underline';
    },4000);
    setTimeout(() => {
        displayName.style.textdecoration = 'none';
        displayName.innerHTML = 'M';
    },4500);
    setTimeout(() => {
        displayName.innerHTML = 'Mo';
    },4800);
    setTimeout(() => {
        displayName.innerHTML = 'Mot';
    },5100);
    setTimeout(() => {
        displayName.innerHTML = 'Moti';
    },5400);
    setTimeout(() => {
        displayName.innerHTML = 'Moti A';
    },5700);
    setTimeout(() => {
        displayName.innerHTML = 'Moti Ab';
    },6000);
    setTimeout(() => {
        displayName.innerHTML = 'Moti Abe';
    },6300);
    setTimeout(() => {
        displayName.innerHTML = 'Moti Abeb';
    },6600);
    setTimeout(() => {
        displayName.innerHTML = 'Moti Abebe';
    },6900);


   
}

display();

const photographySection = document.querySelector('#photography-images');
const photographyImages = photographySection.querySelectorAll('img');


// isinviewport function
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= photographySection.offsetHeight &&
        rect.right <= photographySection.offsetWidth
    );
}



