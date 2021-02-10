var _data = [];

var _cart = [];

function getData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            _data = JSON.parse(this.responseText);
            populateCartList();
        }
    };
    xhttp.open("GET", "https://raw.githubusercontent.com/Xerren09/oamk-html-term3-2020/master/data.txt", true);
    xhttp.send();
}

function populateCartList() {
    if (JSON.parse(sessionStorage.getItem("_cart")) != null) {
        _cart = JSON.parse(sessionStorage.getItem("_cart"));
    }
    if (!_cart.length) {
        generateCartItem(0, "NoItem", "Your cart is empty. Products will show up here after you added them.", "0");
    }
    else {
        for (let i = 0; i < _cart.length; i++) {
            generateCartItem(i, _data[parseInt(_cart[i])].image, _data[parseInt(_cart[i])].name, _data[parseInt(_cart[i])].price);
        }
    }
    updatePriceNCart();
}

function updatePriceNCart() {
    let totalPrice = 0;
    for (let i = 0; i < _cart.length; i++) {
        totalPrice += parseInt(_data[parseInt(_cart[i])].price);
    }
    document.getElementById('sumPrice').textContent = "TOTAL: " + totalPrice + " €";
    let cartCount = document.getElementById("CartLink");
    cartCount.textContent = " Cart: ";
    if (_cart.length <= 0) {
        cartCount.textContent += ("0");
    }
    else {
        cartCount.textContent += (_cart.length);
    }
}

function removeFromCart(removeID) {
    _cart.splice(removeID, 1);
    sessionStorage.setItem("_cart", JSON.stringify(_cart));
    document.getElementById(removeID).remove();
    //
    let _cartElementList = document.getElementsByClassName("ListItem");
    for (let i = removeID; i < _cartElementList.length; i++) {
        let _newid = parseInt(_cartElementList[i].id) - 1;
        _cartElementList[i].id = _newid;
        _cartElementList[i].getElementsByClassName("RemoveBtn")[0].onclick = function () { removeFromCart(_newid) };
    }
    //
    if (_cart.length <= 0) {
        generateCartItem(0, "NoItem", "Your cart is empty. Products will show up here after you added them.", "0");
    }
    updatePriceNCart();
}

function generateCartItem(_itemID, _imagePath, _itemName, _itemPrice) {

    let cartItem = document.createElement('div');
    cartItem.classList.add('ListItem');
    cartItem.id = _itemID;

    let itemDivider = document.createElement('hr');

    let itemInfo = document.createElement('div');
    itemInfo.classList.add('ItemInfo');

    let itemControl = document.createElement('div');
    itemControl.classList.add('ItemControl');

    cartItem.append(itemDivider);
    cartItem.append(itemInfo);
    itemInfo.append(itemControl);

    let titleHeading = document.createElement('h2');

    if (_imagePath != "NoItem") {
        let image = document.createElement('img');
        image.classList.add('ItemImg');
        image.src = _imagePath;
        itemControl.append(image);

        let removeButton = document.createElement('button');
        removeButton.classList.add('RemoveBtn');
        removeButton.append(document.createTextNode("Remove"));
        removeButton.onclick = function () { removeFromCart(parseInt(_itemID)) };

        let itemPrice = document.createElement('div');

        let titleHeading2 = document.createElement('h2');
        titleHeading2.append(document.createTextNode(_itemPrice + "€"));

        let titleLink = document.createElement('a');
        titleLink.classList.add('ItemTitle');
        titleLink.href = "productpage.html";
        titleLink.append(document.createTextNode(_itemName));
        titleLink.onclick = function () { setPageReferer(_cart[parseInt(_itemID)]) };

        console.log(_itemID);

        itemControl.append(titleHeading);
        titleHeading.append(titleLink);
        itemControl.append(removeButton);
        itemInfo.append(itemPrice);
        titleHeading.append(titleLink);
        itemPrice.append(titleHeading2);
    }
    else {
        titleHeading.append(document.createTextNode(_itemName));
        itemControl.append(titleHeading);
    }

    document.getElementById('ItemList').append(cartItem);
}

function setPageReferer(_ID) {
    sessionStorage.setItem("_referer", _ID.toString());
}