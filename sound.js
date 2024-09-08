const btnsi = document.querySelector('.btn-si');
const btnno = document.querySelector('.btn-no');

const audio = document.querySelector('.background');

btnsi.addEventListener('click', function reproducir() {

    audio.muted=false;
    audio.play();
    veil.style.zIndex="-1";
    

})

btnno.addEventListener('click', function reproducir() {

    audio.muted=true;

    audio.play();

    veil.style.zIndex="-1";
})


let veil = document.querySelector('.veil');