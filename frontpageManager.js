var _data = [];

var _cart = [];

//downloads _data array contents from remote file
function getData() { 
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            _data = JSON.parse(this.responseText);
            pupulateTiles();
        }
    };
    xhttp.open("GET", "https://raw.githubusercontent.com/Xerren09/oamk-html-term3-2020/master/data.txt", true);
    xhttp.send(); 
}

//main logic handling frontpage generation
function pupulateTiles() {
    for (let i = 0; i < _data.length; i++) {
        addItemToPage(i, _data[i].image, _data[i].name, _data[i].price);
    }
    if (JSON.parse(sessionStorage.getItem("_cart")) != null) {
        _cart = JSON.parse(sessionStorage.getItem("_cart"));
    }
    if (!_cart.length) { /*---*/ }
    else { document.getElementById("CartLink").textContent = " Cart: " + (_cart.length); }
}

//generates product tiles from _data
function addItemToPage(itemID, imagePath, itemName, itemPrice) {
    let frame = document.createElement('div');
    frame.classList.add('ItemContainer');

    let item = document.createElement('div');
    item.classList.add('Item');

    let image = document.createElement('img');
    image.classList.add('ItemImg');
    image.src = imagePath;

    let titleHeading = document.createElement('h2');

    let titleLink = document.createElement('a');
    titleLink.classList.add('ItemTitle');
    titleLink.href = "productpage.html";
    titleLink.append(document.createTextNode(itemName));
    titleLink.onclick = function () { setPageReferer(parseInt(itemID)) };

    let priceHeading = document.createElement('h3');
    priceHeading.append(document.createTextNode(itemPrice + " €"));

    let addToCartButton = document.createElement('button');
    addToCartButton.classList.add("AddToCartBtn");
    addToCartButton.id = itemID;
    addToCartButton.onclick = function () { addToCart(parseInt(itemID)) };
    addToCartButton.textContent = "Add to cart";

    frame.append(item);
    item.append(image);
    item.append(titleHeading);
    titleHeading.append(titleLink);
    item.append(priceHeading);
    item.append(addToCartButton)

    document.getElementById('ItemFrame').append(frame);
}

//little function responsible for adding items to the cart
function addToCart(_itemID) {
    _cart.push(_itemID);
    sessionStorage.setItem("_cart", JSON.stringify(_cart));
    document.getElementById("CartLink").textContent = " Cart: " + (_cart.length);
}

//sets a target id when clicking a link so productpageManager.js knows which item to display
function setPageReferer(_ID) {
    sessionStorage.setItem("_referer", _ID.toString());
}