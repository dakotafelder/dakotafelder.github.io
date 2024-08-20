// Define the path to the SVG folder
const svgFolderPath = 'svgs/'; // Update if necessary

async function loadSVGs() {
    const response = await fetch('svgs.json');
    const data = await response.json();
    const svgGrid = document.getElementById('svg-grid');

    // Create a loading indicator
    const loadingIndicator = document.createElement('div');
    loadingIndicator.textContent = 'Loading SVGs...';
    svgGrid.appendChild(loadingIndicator);

    // Preload all SVGs
    const preloadPromises = data.svgs.map(file => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = reject;
            img.src = svgFolderPath + file;
        });
    });

    try {
        const loadedImages = await Promise.all(preloadPromises);
        
        // Remove loading indicator
        svgGrid.removeChild(loadingIndicator);

        // Add loaded images to the grid
        loadedImages.forEach(img => {
            const gridItem = document.createElement('div');
            gridItem.className = 'grid-item';
            img.style.filter = 'invert(1)'; // Invert the colors of the SVG
            gridItem.appendChild(img);
            svgGrid.appendChild(gridItem);
        });
    } catch (error) {
        console.error('Error loading SVGs:', error);
        loadingIndicator.textContent = 'Error loading SVGs. Please try again.';
    }
}

// Load the SVGs when the page is ready
document.addEventListener('DOMContentLoaded', loadSVGs);