const gridContainer = document.querySelector('.grid-container');

function createGrid(numSquares) {
    // Clear existing grid
    gridContainer.innerHTML = '';

    // Create new grid
    for (let i = 0; i < numSquares; i++) {
        for (let j = 0; j < numSquares; j++) {
            const div = document.createElement('div');
            div.classList.add('grid-item');
            gridContainer.appendChild(div);
        }
    }

    // Add event listeners to new grid items
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('hovered');
        });
    });
}

const resetButton = document.querySelector('.reset-button');
resetButton.addEventListener('click', () => {
    let numSquares = prompt('Enter the number of squares per side (maximum 100):');
    numSquares = parseInt(numSquares, 10);

    if (Number.isNaN(numSquares) || numSquares < 1 || numSquares > 100) {
        alert('Invalid input! Please enter a number between 1 and 100.');
    } else {
        createGrid(numSquares);
    }
});

// Create initial grid with 16x16 squares
createGrid(16);
