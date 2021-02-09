let frame = document.createElement('div');
frame.id = "rectangle";

let productImage = document.createElement('img');
productImage.classList.add('ItemImg');
pdocuctImage.src = itemImage;

let productInfoBox = document.createElement('div');
productInfoBox.id = "ItemDescription";

let productNameDiv = document.createElement('div');
productNameDiv.id = "name";

let productName = document.createElement('h1');
productName.append(document.createTextNode(itemName));

let productPriceDiv = document.createElement('div');

let productPrice = document.createElement('h3');
productPrice.append(document.createTextNode(itemPrice));

let productHL = document.createElement('hr');

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

//hr

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
productInfoBox.append(productHL);
productInfoBox.append(cartControlDiv);
cartControlDiv.append(cartProductCount);
cartControlDiv.append(cartAddButton);
productInfoBox.append(productHL);
productInfoBox.append(productDescriptionDiv);
productDescriptionDiv.append(productDescriptionStrong);
productDescriptionDiv.append(productDescriptionUl);

for (let i = 0; i < _data[_itemID].description.length; i++) {
    let productDescriptionLi = document.createElement('li');
    productDescriptionLi.append(document.createTextNode(_data[_itemID].description[i]));
    productDescriptionUl.append(productDescriptionLi);
}



frame.append(productImage);
frame.append(productInfoBox);
productInfoBox.append(productNameDiv);
productNameDiv.append(productName);
productInfoBox.append(productPriceDiv);
productPriceDiv.append(productPrice);
productInfoBox.append(productHL);
productInfoBox.append(cartControlDiv);
cartControlDiv.append(cartProductCount);
cartControlDiv.append(cartAddButton);
productInfoBox.append(productHL);
productInfoBox.append(productDescriptionDiv);
productDescriptionDiv.append(productDescriptionStrong);
productDescriptionDiv.append(productDescriptionUl);

