const cards = document.querySelectorAll('.card');
console.log(cards);

cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flip')
    })    
});