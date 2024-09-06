const grande= document.querySelector('.contenido')

const punto= document.querySelectorAll('.point')


punto.forEach((cadaPunto , i )=>{
    punto[i].addEventListener('click', ()=>{

        let posicion=i
        let calculo= posicion* -33
        grande.style.transform = `translate(${calculo}%)`

    })
})