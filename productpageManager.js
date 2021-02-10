var _data = [];

var _cart = [];

function getData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            _data = JSON.parse(this.responseText);
            getPageID();
        }
    };
    xhttp.open("GET", "https://raw.githubusercontent.com/Xerren09/oamk-html-term3-2020/master/data.txt", true);
    xhttp.send();
}

function getPageID() {
    if (sessionStorage.getItem("_referer") != null) {
        let _referer = sessionStorage.getItem("_referer");
        generatePageContents(_referer);
    }
    else {
        generatePageContents(1);
    }
}

function generatePageContents(_itemID) {
    let frame = document.createElement('div');
    frame.id = "rectangle";

    let productImage = document.createElement('img');
    productImage.classList.add('ItemImg');
    productImage.src = _data[_itemID].image;

    let productInfoBox = document.createElement('div');
    productInfoBox.id = "ItemDescription";

    let productNameDiv = document.createElement('div');
    productNameDiv.id = "name";

    let productName = document.createElement('h1');
    productName.append(document.createTextNode(_data[_itemID].name));

    let productPriceDiv = document.createElement('div');

    let productPrice = document.createElement('h3');
    productPrice.append(document.createTextNode(_data[_itemID].price + "€"));

    let productHL1 = document.createElement('hr');

    let cartControlDiv = document.createElement('div');
    cartControlDiv.id = "CartControl";

    let cartProductCount = document.createElement('input');
    cartProductCount.type = "number";
    cartProductCount.id = "_itemNumberJS";
    cartProductCount.value = "1";
    cartProductCount.min = "1";

    let cartAddButton = document.createElement('button');
    cartAddButton.id = "AddToCart";
    cartAddButton.onclick = function () { addToCart(parseInt(_itemID)) };
    cartAddButton.textContent = "Add to cart";

    let productHL2 = document.createElement('hr');

    let productDescriptionDiv = document.createElement('div');
    productDescriptionDiv.id = "Description";
    productDescriptionDiv.contentEditable = false;

    let productDescriptionStrong = document.createElement('strong');
    productDescriptionStrong.append("Features:")

    let productDescriptionUl = document.createElement('ul');
    productDescriptionUl.style = "padding-left: 15px;";

    frame.append(productImage);
    frame.append(productInfoBox);
    productInfoBox.append(productNameDiv);
    productNameDiv.append(productName);
    productInfoBox.append(productPriceDiv);
    productPriceDiv.append(productPrice);
    productInfoBox.append(productHL1);
    productInfoBox.append(cartControlDiv);
    cartControlDiv.append(cartProductCount);
    cartControlDiv.append(cartAddButton);
    productInfoBox.append(productHL2);
    productInfoBox.append(productDescriptionDiv);
    productDescriptionDiv.append(productDescriptionStrong);
    productDescriptionDiv.append(productDescriptionUl);

    for (let i = 0; i < _data[_itemID].description.length; i++) {
        let productDescriptionLi = document.createElement('li');
        productDescriptionLi.append(document.createTextNode(_data[_itemID].description[i]));
        productDescriptionUl.append(productDescriptionLi);
    }

    document.getElementById('Content').append(frame);

    updateCart();
}

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

function addToCart(_itemID) {
    let count = document.getElementById("_itemNumberJS").value;
    for (let i = 0; i < parseInt(count); i++) {
        _cart.push(_itemID);
    }
    sessionStorage.setItem("_cart", JSON.stringify(_cart));
    document.getElementById("CartLink").textContent = " Cart: " + (_cart.length);
}