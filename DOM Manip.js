document.getElementById("muatproduk").addEventListener("click", function() {
    fetch("List Product.json")
        .then(response => response.json())
        .then(data => {
            const products = data.products.slice(20,30);
            const productList = document.getElementById("list-product");
            productList.innerHTML = "";

            products.forEach(product => {
                const productItem = document.createElement("div");
                productItem.classList.add("product");

                productItem.innerHTML = `
                    <img src="${product.thumbnail}" alt="${product.title}">
                    <h3>${product.title}</h3>
                    <p>${product.description}</p>
                    <p>Stok: ${product.stock}</p>
                    <p>Harga: $${product.price}</p>
                    <p>Rating: ${product.rating} \u2B50</p>
                `;

                productList.appendChild(productItem);
            });
        })
});
