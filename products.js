//Task 2 and 3: Fetch Products from the API Using Fetch and Promises and Display Product Details Dynamically

const productList = document.getElementById('productList');

//Fetches data from the API
fetch('https://www.course-api.com/javascript-store-products')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(products => {
        products.forEach(product => {
            const listItem = document.createElement('li');
            listItem.textContent = `${product.title} - $${product.price}`;
            productList.appendChild(listItem); //dynamically lists items
        });

    })
    

