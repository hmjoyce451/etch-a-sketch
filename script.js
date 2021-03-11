const container = document.getElementById('container');
const clearBtn = document.querySelector('.clear-btn');
const select = document.getElementById('select');
let rgb = 250;

function makeGrid(gridSize) {
    for(let i=0; i<gridSize; i++) {
        const row = document.createElement('div');
        container.appendChild(row);

        for(let j=0; j<gridSize; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `${400 / gridSize}px`;
            square.style.height = `${400 / gridSize}px`;
            row.appendChild(square);
        }
    }
}

function getRandomColor() {
    return Math.floor(Math.random()*16777215).toString(16);
}

function getGridSize() {
    gridSize = prompt('Enter a grid amount between 12 and 64', 16);
    if(gridSize >= 12 && gridSize <= 64) {
        makeGrid(gridSize)
    } else getGridSize();
}

function clear() {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    getGridSize();
}

container.addEventListener('mouseover', function(e) {
    const squares = e.target;
    if(!squares.classList.contains('square')) {
        return;
    } else if(select.value == 'random') {
        squares.style.backgroundColor = '#' + getRandomColor();
    } else if(select.value == 'black') {
        squares.style.backgroundColor = '#000';
    } else if(select.value == 'grayscale') {
        squares.style.backgroundColor = `rgb(${rgb}, ${rgb}, ${rgb})`;
        rgb = 250;
       if(rgb > 0) {
            squares.addEventListener('mouseover', () => {
                squares.style.backgroundColor = `rgb(${rgb}, ${rgb}, ${rgb})`;
                rgb -= 25;
            });
       }
    }  
});




clearBtn.addEventListener('click', function() {
    clear();
});

getGridSize();