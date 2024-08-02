const container = document.querySelector('#container');
const BOARD_SIZE = 16*16;


for(let index = 0; index < BOARD_SIZE; index++){
    const newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'pixel');
    container.appendChild(newDiv);
}