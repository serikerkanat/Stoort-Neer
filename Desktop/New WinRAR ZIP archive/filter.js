function showCurrentTime() {
    const currentTime = new Date().toLocaleTimeString();
    document.getElementById("time-display").textContent = currentTime;
    
    localStorage.setItem('selectedFilter', 'time');
}

function filterProducts(category) {
    localStorage.setItem('selectedFilter', category);
    
    if (category === 'time') {
        showCurrentTime();
    } else {
        document.getElementById("product-list").textContent = "Showing " + category + " products";
    }
}

window.addEventListener('load', () => {
    const savedFilter = localStorage.getItem('selectedFilter');
    
    if (savedFilter) {
        if (savedFilter === 'time') {
            showCurrentTime();
        } else {
            filterProducts(savedFilter);
        }
    }
});
