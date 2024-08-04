const container = document.querySelector('#container');
const BOARD_SIZE = 16*16;


for(let index = 0; index < BOARD_SIZE; index++){
    const newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'pixel');
    container.appendChild(newDiv);
}

const pixel = document.querySelectorAll('#pixel');


for(let pixel_index = 0; pixel_index < pixel.length; pixel_index++){
    pixel[pixel_index].addEventListener('click', function (e) {
        if(e.target.style.backgroundColor === 'black'){
            e.target.style.backgroundColor = 'transparent';
        }
        else{
            e.target.style.backgroundColor = 'black';
        }
})};
