const container = document.querySelector('#container');
const BOARD_SIZE = 16*16;


for(let index = 0; index < BOARD_SIZE; index++){
    const newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'pixel');
    container.appendChild(newDiv);
}

const pixel = document.querySelectorAll('#pixel');

// Hover 
for(let pixel_index = 0; pixel_index < pixel.length; pixel_index++){
    pixel[pixel_index].addEventListener('mouseover', function (e) {
        e.target.style.backgroundColor = 'black';
})};
//

// Reset
const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    for(let pixel_index = 0; pixel_index < pixel.length; pixel_index++){
       pixel[pixel_index].style.backgroundColor = 'transparent';
    }
});