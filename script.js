
const zoom_in = document.querySelector('.zoom-in-btn');
const zoom_out = document.querySelector('.zoom-out-btn');

const centrePosition = document.querySelector('.sun');
const orbitPosition = document.querySelector('.earth');

const system = document.querySelector('.sys1')
const systemfull = document.querySelector('.sys2')


let state = 'sun-and-earth';


const zoomInHandler = () => {

    if(state === 'sun-and-earth'){
        centrePosition.classList.remove('sun');
        centrePosition.classList.add('centreEarth')
        orbitPosition.classList.remove('earth')
        orbitPosition.classList.add('moon')
        state = 'earth-and-moon'
    }
    if(state === 'solarsystem'){
        system.classList.add('system')
        system.classList.remove('hidden')
        systemfull.classList.add('hidden')
        systemfull.classList.remove('systemfull')
        state = 'sun-and-earth'
    }

}

const zoomOutHandler = () => {

    if(state === 'earth-and-moon'){
        centrePosition.classList.remove('centreEarth');
        centrePosition.classList.add('sun')
        orbitPosition.classList.remove('moon')
        orbitPosition.classList.add('earth')
        state = 'sun-and-earth'
    }

    if(state === 'sun-and-earth'){
        system.classList.add('hidden');
        system.classList.remove('system')
        systemfull.classList.remove('hidden')
        systemfull.classList.add('systemfull')
        state = 'solarsystem'
    }

}


zoom_in.addEventListener('click', zoomInHandler);
zoom_out.addEventListener('click', zoomOutHandler);