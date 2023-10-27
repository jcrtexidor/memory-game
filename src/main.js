
const urls = [
    '../assets/images/cheeseburger.png',
    '../assets/images/fries.png',
    '../assets/images/hotdog.png',
    '../assets/images/ice-cream.png',
    '../assets/images/milkshake.png',
    '../assets/images/pizza.png',
]

let cards;
let choosenCards;
let discoveredCards;

init = () => {
    cards = [...urls, ...urls]
        .sort(() => 0.5 - Math.random())
        .map(url => ({ src: url }));
    choosenCards = [];
    discoveredCards = [];
}



createBoard = () => {
    init();

    const grid = document.querySelector('#grid');
    [...grid.children].forEach(node => node.remove());

    cards.forEach((card, index) => {
        const img = document.createElement('img');
        img.setAttribute('src', '../assets/images/blank.png');
        img.setAttribute('data-id', index);
        img.setAttribute('draggable', false);
        img.addEventListener('click', flipCard);
        grid.append(img);
    });
}

flipCard = (event) => {
    const { target } = event;
    target.setAttribute('src', cards[target.dataset.id].src);
    target.classList.add('block');
    choosenCards.push(target);
    checkMatch();
}

checkMatch = () => {
    if (choosenCards.length !== 2)
        return;

    const [card1, card2] = [choosenCards.pop(), choosenCards.pop()];

    if (card1.src === card2.src) {
        discoveredCards.push(card1);
        const percent = Math.round((discoveredCards.length * 100) / (cards.length / 2));
        document.querySelector('#result').innerHTML = `${percent}%`;
        setTimeout(() => {
            [card1, card2].forEach(card => {
                card.src = '../assets/images/white.png';
                card.classList.add('block');
            });
        }, 500);
    }
    else {
        setTimeout(() => {
            [card1, card2].forEach(card => {
                card.src = '../assets/images/blank.png';
                card.classList.remove('block');
            });
        }, 500);
    }


}


createBoard();
