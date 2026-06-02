// 1. Seleção correta dos elementos do HTML
let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let items = document.querySelectorAll('.list .item');
let numberDisplay = document.querySelector('.indicators .number');
let dots = document.querySelectorAll('.indicators ul li');

let active = 0;
let lastPosition = items.length - 1;

// 2. Função única para atualizar o estado visual do slider
function mostrarSlide() {
    // Remove a classe 'active' do item e do ponto que estavam ativos antes
    let itemOld = document.querySelector('.list .item.active');
    let dotOld = document.querySelector('.indicators ul li.active');
    
    if (itemOld) itemOld.classList.remove('active');
    if (dotOld) dotOld.classList.remove('active');

    // Adiciona a classe 'active' no novo carro e no novo ponto
    items[active].classList.add('active');
    dots[active].classList.add('active');

    // Atualiza o número (ex: se for 1, vira "02")
    numberDisplay.innerText = String(active + 1).padStart(2, '0');
}

// 3. Evento do botão Avançar (Next)
nextButton.onclick = () => {
    // Se estiver no último carro, volta para o primeiro (0), senão avança 1
    active = active >= lastPosition ? 0 : active + 1;
    mostrarSlide();
    console.log("bateu")
}

// 4. Evento do botão Voltar (Prev)
prevButton.onclick = () => {
    // Se estiver no primeiro carro, vai para o último, senão volta 1
    active = active <= 0 ? lastPosition : active - 1;
    mostrarSlide();
    console.log("bateu")
}