var _cart = [];

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