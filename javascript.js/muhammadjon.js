let menu = document.querySelector('.bx-menu');
let side_bar = document.querySelector('.side_bar');
let minus = document.querySelector('.bx-minus');

menu.addEventListener('click', ()=> {
    side_bar.style.display = 'flex'
});

minus.addEventListener('click', ()=>{
    side_bar.style.display = 'none'
})