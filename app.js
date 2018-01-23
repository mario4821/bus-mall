'use strict';

Product.allProducts = [];

//constructor of products

function Product(filepath, name){
    this.filepath = filepath;
    this.name = name;
    Product.allProducts.push(this);
}

//three displayed images, side-by-side

//total number of clicks and percentages of times an item was clicked


//images of products
new Product('img/bag.jpg', 'R2D2 Bag');
new Product('img/banana.jpg', 'Banana Slicer');
new Product('img/bathroom.jpg', 'Toilet Stand');
new Product('img/boots.jpg', 'Yellow Boots');
new Product('img/breakfast.jpg', 'Breakfast Maker');
new Product('img/bubblegum.jpg', 'Meatball Gum');
new Product('img/chair.jpg', 'Red Chair');
new Product('img/cthulhu.jpg', 'Green Monster');
new Product('img/dog-duck.jpg', 'Duck Beak');
new Product('img/dragon.jpg', 'Dragon Meat');
new Product('img/pen.jpg', 'Pen Cutlery');
new Product('img/pet-sweep.jpg', 'Broom Booties');
new Product('img/scissors.jpg', 'Pizza Scissors');
new Product('img/shark.jpg', 'Shark Bag');
new Product('img/sweep.png', 'Baby Broom');
new Product('img/tauntaun.jpg', 'Hoth Bag');
new Product('img/unicorn.jpg', 'Unicorn Meat');
new Product('img/usb.gif', 'Reptile Tail');
new Product('img/water-can.jpg', 'Water Jug');
new Product('img/wine-glass.jpg', 'Wine Glass');


//access image element from the DOM
var imgEl = document.getElementById('bus-products');

//event listener on the image
imgEl.addEventListener('click', randomProduct);


// callback function for event listener to randomly display image
function randomProduct() {
//random number generator to return a number between 0 and the length of the array.
var randomStuff = Math.floor(Math.random() * Product.allProducts.length);
//use the random number to displaya  product at that random inde
imgEl.src = Product.allProducts[randomStuff].filepath;
}

randomProduct();