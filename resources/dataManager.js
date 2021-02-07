const _data = [
    {
        name: 'AMD Radeon 5700 XT',
        price: '459',
        image: 'resources/Images/251223-b324043_300x300.jpg',
        description: [
            ''
        ]
    },

    {
        name: 'ASUS GeForce RTX 3070 8GB DUAL',
        price: '599',
        image: 'resources/Images/302003-b303045_300x300.jpg',
        description: [
            ''
        ]
    },

    {
        name: 'MSI GeForce RTX 3070 Ventus 3X OC',
        price: '619',
        image: 'resources/Images/302003-b303045_300x300.jpg',
        description: [
            ''
        ]
    },

    {
        name: 'ASUS GeForce RTX 3070 8GB GDDR6 DUAL OC',
        price: '619',
        image: 'resources/Images/302003-b303045_300x300.jpg',
        description: [
            ''
        ]
    },

    {
        name: 'GeForce RTX3070 GamingPro',
        price: '639',
        image: 'resources/Images/302003-b303045_300x300.jpg',
        description: [
            ''
        ]
    },

    {
        name: 'ASUS TUF GAMING GeForce RTX™ 3070 OC Edition 8GB GDDR6',
        price: '669',
        image: 'resources/Images/302003-b303045_300x300.jpg',
        description: [
            ''
        ]
    },

    {
        name: 'EVGA GeForce RTX 3070 XC3 BLACK',
        price: '619',
        image: 'resources/Images/302003-b303045_300x300.jpg',
        description: [
            ''
        ]
    },

    {
        name: 'ASUS ROG STRIX RTX3090 O24G GAMING',
        price: '1889',
        image: 'resources/Images/302003-b303045_300x300.jpg',
        description: [
            ''
        ]
    },

    {
        name: 'ASUS GeForce RTX 3070 8GB GDDR6 ROG STRIX GAMING',
        price: '719',
        image: 'resources/Images/302003-b303045_300x300.jpg',
        description: [
            ''
        ]
    }
];

const _cart = [];

function LoadItemList_All(){
    document.getElementById('_itemNameJS').textContent = _data[0].name;
    document.getElementById('_itemPriceJS').textContent = _data[0].price;
}

function LoadItemPage(id){
    document.getElementById('_itemNameJS').textContent = _data[id].name;
    document.getElementById('_itemPriceJS').textContent = _data[id].price;
    document.getElementById('_itemNumberJS').value = 1;
    //document.getElementById('_itemDescriptionJS') = 
    /*  this one needs to be dynamically generated because of the individual <li> tags for lines*/
    /* 
    i < _data[id].description.count, i++
        <li> = _data[id].description[i]
    */
}

function AddItemToCart() {
    let _itemname = document.getElementById('_itemNameJS');
    let _itemprice = document.getElementById('_itemPriceJS');
    let _itemcount = document.getElementById('_itemNumberJS');

    console.log(_itemname.textContent);
    console.log(_itemprice.textContent);
    console.log(_itemcount.value);

    _cart.push({
        name: _itemname.textContent,
        price: _itemprice.textContent,
        count: _itemcount.value
    })

    console.log(_cart[0].name)
}