
const bank = document.querySelector('#cardBank');

/* Drag and Drop Cards from Card Bank */
const onDropCard = (event) => {
    event.dataTransfer.getData('id');
}

bank.ondrop = onDropCard;
bank.ondragover = (event) => {
    event.preventDefault();
}

/* Create Card Bank */
const loadJackboxImgs = () => {
    /* Create Game Id for Img */
    const gameId = [];
    for (let i=1; i<=45; i++) {
        gameId.push(i);
    }
    /* Creates Each Game Img */
    gameId.forEach(imgNum => {
        const gameImg = document.createElement('div');
        gameImg.classList.add('card');
        gameImg.setAttribute('draggable', 'true');
        gameImg.ondragstart = onDragStart;
        gameImg.ondragend = onDragEnd;
        
        gameImg.id = imgNum;
        
        const image = new Image(200, 92);
        image.src = `./assets/jackbox-img/${imgNum}.jpg`;
        image.style.pointerEvents = 'none';
        
        gameImg.appendChild(image);
        bank.appendChild(gameImg);
    });
}
loadJackboxImgs();

/* Reset Cards */
const reset = document.querySelector('#reset');

const resetCardBank = (event) => {
    location.reload();
}
reset.onclick = resetCardBank;