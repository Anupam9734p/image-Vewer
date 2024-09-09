
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const resultsContainer = document.getElementById('resultsContainer');

    const fetchData = async (val) => {
        try {
            const response = await fetch(`https://dummyjson.com/products/search?q=${val}`);
            const data = await response.json();
            displayResults(data.products);
        } catch (error) {
            console.error('Error:', error);
        }
    };

})
const displayResults = (product) =>{
    resultsdiv.innerHTML=' ';       
    if(product.length > 0){
        product.foreach ((product, index) =>{
            const productDiv = document.createElement('div');
            productDiv.textContent = product.brand
                         resultsDiv.appendChild(productDiv);
        });
    }
};

