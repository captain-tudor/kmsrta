const positionImage = document.getElementById('position-image');
const positionName = document.getElementById('position-name');
const generateButton = document.getElementById('generate-button');
let positions = [];

// Function to load positions from JSON file
function loadPositions() {
  fetch('positions.json')
    .then(response => response.json())
    .then(data => {
      positions = data;
    })
    .catch(error => console.error('Error fetching positions:', error));
}

// Function to generate and display a random position
function generateRandomPosition() {
  if (positions.length === 0) {
    console.error('No positions loaded. Make sure to call loadPositions() first.');
    return;
  }

  const randomIndex = Math.floor(Math.random() * positions.length);
  const randomPosition = positions[randomIndex];
  positionImage.src = randomPosition.image;
  positionName.textContent = randomPosition.name;
  positionName.style.display = 'block'; // Show the "Position Name" text
}

// Load positions when the page loads
loadPositions();

// Bind the generateRandomPosition function to the button click event
generateButton.addEventListener('click', generateRandomPosition);
