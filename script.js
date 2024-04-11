
const zoom_in = document.querySelector('.zoom-in-btn');
const zoom_out = document.querySelector('.zoom-out-btn');

const centrePosition = document.querySelector('.sun');
const orbitPosition = document.querySelector('.earth');

const system = document.querySelector('.sys1')
const systemfull = document.querySelector('.sys2')


let state = 1;


const zoomInHandler = () => {

    if(state === 1){
        centrePosition.classList.remove('sun');
        centrePosition.classList.add('centreEarth')
        orbitPosition.classList.remove('earth')
        orbitPosition.classList.add('moon')
        state = 0
    }
    if(state === 2){
        system.classList.add('system')
        system.classList.remove('hidden')
        systemfull.classList.add('hidden')
        systemfull.classList.remove('systemfull')
        state = 1
    }

}

const zoomOutHandler = () => {

    if(state === 0){
        console.log("statecurrent:", state)
        system.classList.add('system')
        system.classList.remove('hidden')
        systemfull.classList.add('hidden')
        systemfull.classList.remove('systemfull')
        centrePosition.classList.remove('centreEarth');
        centrePosition.classList.add('sun')
        orbitPosition.classList.remove('moon')
        orbitPosition.classList.add('earth')
        state = 1
        console.log("changedstate:" , state)
    }

    if(state === 1){
        system.classList.add('hidden');
        system.classList.remove('system')
        systemfull.classList.remove('hidden')
        systemfull.classList.add('systemfull')
        state = 2
    }

}


zoom_in.addEventListener('click', zoomInHandler);
zoom_out.addEventListener('click', zoomOutHandler);