// JavaScript code to handle functionality

// Function to toggle the visibility of the panel options
function togglePanelOptions() {
    const panelOptions = document.querySelector('.panel-options');
    panelOptions.classList.toggle('show');
}

// Function to handle search
function searchAmazon() {
    const searchInput = document.querySelector('.search-input').value;
    // Perform search functionality here, e.g., redirect to search results page
    console.log('Searching for:', searchInput);
}

// Event listener for clicking on the panel toggle
document.querySelector('.panel-all').addEventListener('click', togglePanelOptions);

// Event listener for clicking on the search icon
document.querySelector('.searchSymbol').addEventListener('click', searchAmazon);
