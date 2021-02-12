var _cart = [];

//quickly loads in the cart array to display the correct number of items
function updateCart() {
    //
    if (JSON.parse(sessionStorage.getItem("_cart")) != null) {
        _cart = JSON.parse(sessionStorage.getItem("_cart"));
    }
    if (!_cart.length) {
        document.getElementById("CartLink").textContent = " Cart: " + (0);
    }
    else { document.getElementById("CartLink").textContent = " Cart: " + (_cart.length); }
    //
}