const rows = document.querySelectorAll('.tierRow');
const colors = ['#D70E40', '#FC542E', '#50E1B4', '#1C9AFC'];

const onDragOver = (event) => {
    event.preventDefault();
}

const onDrop = (event) => {
    event.preventDefault();
    const draggedCardId = event.dataTransfer.getData('id');
    const draggedCard = document.getElementById(draggedCardId);

    /* Determine where to place cards */
    if (Number(event.target.id) === 0) {
        event.target.querySelector('.games').appendChild(draggedCard);
    } else if (event.target.id.indexOf('Row') !== -1) {
        event.target.appendChild(draggedCard);
    } else {
        const ev = event.target;
        const parent = event.target.parentElement;
        parent.insertBefore(draggedCard, ev);
    }    
}


rows.forEach((row, index) => {
    const label = row.querySelector('.label');
    label.style.backgroundColor = colors[index];
 
    row.ondragover = onDragOver;
    row.ondrop = onDrop;
});
