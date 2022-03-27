const boxes = document.querySelectorAll('.text-box');
const loader = document.querySelectorAll('.loader');
const texts = document.querySelectorAll('.text-content');

boxes.forEach(box => {
    box.addEventListener('animationend',()=>{
        loader.forEach(loader => { loader.classList.toggle('hidden')});
        texts.forEach(text => { text.classList.toggle('hidden')});
        box.style.borderRadius = "var(--typed)";
    });
})



window.addEventListener('DOMContentLoaded',()=>{
    setTimeout(displayBox,2150);
})

function displayBox(e){
    console.log(e)
    console.log('Took me 2 seconds to do this');
}