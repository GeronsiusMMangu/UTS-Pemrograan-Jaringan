const productList = document.getElementById("product-list");
const cart = document.getElementById("cart");
const checkoutButton = document.getElementById("checkout-button");
const products = [
    { id: 1, name: "Produk 1", price: 10 },
    { id: 2, name: "Produk 2", price: 15 },
    { id: 3, name: "Produk 3", price: 20 }
];

// Tampilkan daftar produk
function displayProducts() {
    productList.innerHTML = "";
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.innerHTML = `${product.name} - Rp ${product.price}
            <button onclick="addToCart(${product.id})">Tambah ke Keranjang</button>`;
        productList.appendChild(productDiv);
    });
}

// Tambahkan produk ke keranjang
function addToCart(productId) {
    const selectedProduct = products.find(product => product.id === productId);
    if (selectedProduct) {
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `${selectedProduct.name} - Rp ${selectedProduct.price}
            <button onclick="removeFromCart(${productId})">Hapus</button>`;
        cart.appendChild(cartItem);
    }
}

// Hapus produk dari keranjang
function removeFromCart(productId) {
    const cartItem = document.querySelector(`#cart div[data-id="${productId}"]`);
    if (cartItem) {
        cartItem.remove();
    }
}

// Inisialisasi aplikasi
displayProducts();

// Tambahkan event listener untuk checkout
checkoutButton.addEventListener("click", () => {
    // Logika pembayaran dapat ditambahkan di sini
});