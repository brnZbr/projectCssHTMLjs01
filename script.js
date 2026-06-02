let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let items = document.querySelectorAll('.list .item');
let numberDisplay = document.querySelector('.indicators .number');
let dots = document.querySelectorAll('.indicators ul li');

let active = 0;
let lastPosition = items.length - 1;

function mostrarSlide() {
    let itemOld = document.querySelector('.list .item.active');
    let dotOld = document.querySelector('.indicators ul li.active');
    
    if (itemOld) itemOld.classList.remove('active');
    if (dotOld) dotOld.classList.remove('active');

    items[active].classList.add('active');
    dots[active].classList.add('active');

    numberDisplay.innerText = String(active + 1).padStart(2, '0');
}

nextButton.onclick = () => {
    active = active >= lastPosition ? 0 : active + 1;
    mostrarSlide();
    console.log("bateu")
}

prevButton.onclick = () => {
    active = active <= 0 ? lastPosition : active - 1;
    mostrarSlide();
    console.log("bateu")
}