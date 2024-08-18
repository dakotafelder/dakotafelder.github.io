// Define the path to the SVG folder
const svgFolderPath = 'svgs/'; // Update if necessary

// Fetch the list of SVG files from the JSON file
async function loadSVGs() {
    const response = await fetch('svgs.json');
    const data = await response.json();

    const svgGrid = document.getElementById('svg-grid');

    data.svgs.forEach(file => {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';

        const img = document.createElement('img');
        img.src = svgFolderPath + file;

        gridItem.appendChild(img); // Only append the SVG image
        svgGrid.appendChild(gridItem);
    });
}

// Load the SVGs when the page is ready
document.addEventListener('DOMContentLoaded', loadSVGs);