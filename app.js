'use strict';
//array to store the objects
Product.allProducts = [];

//track total number of clicks
Product.totalClicks = 0;

//variables for pictures
var randomLeft = 0;
var randomCenter = 0;
var randomRight = 0;

//three displayed images, side-by-side
//percentages of times an item was clicked
//track previously displayed images
Product.lastDisplayed = [];

//access the section element from the DOM
var sectionEl = document.getElementById('bus-products');

//access the ul element from the DOM
var ulEl = document.getElementById('results');

//array to store chart label names
var productNames = [];

//array to store votes for each product
var productVotes = [];

var previousNumbers = [];

//Current numbers for images called to avoid repeats
var currentNumbers = [];

//array to store names for chart lables
var names = [];

function randomizerProduct() {
    return Math.floor(Math.random() * Product.allProducts.length);
}

//constructor of products
function Product(filepath, name){
    this.filepath = filepath;
    this.name = name;
    this.votes = 0;
    this.timesDisplayed = 0;
    Product.allProducts.push(this);
    productNames.push(this.name);
    names.push(this.name);
}

//stop user from clicking when they reach 25 votes/clicks

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
var leftEl = document.getElementById('left');
var rightEl = document.getElementById('right');
var centerEl = document.getElementById('center');

// callback function for event listener to randomly display image
function randomProduct() {
//random number generator to return a number between 0 and the length of the array.
    randomLeft = Math.floor(Math.random() * Product.allProducts.length);
    randomCenter = Math.floor(Math.random() * Product.allProducts.length);
    randomRight = Math.floor(Math.random() * Product.allProducts.length);

    if(randomLeft === randomCenter || randomCenter === randomRight || randomLeft === randomRight){
        randomProduct();
    }
}
// function previousNumbers
// if (randomRight previousNumbers || randomLeft = previousNumbers || randomCenter = previousNumbers)
// }

//check to make sure each random number is unique and not one of the previously displayed images
//if numbers are the same, then new random numbers need to be generated.
function newNumbers() {
    do {var temp = randomizerProduct() 
//while the conditions are met the loop will rn and randomly produce a number.
    }
    while (currentNumbers.includes(temp) || previousNumbers.includes(temp)) 
    return temp; //returns a random number
    }


//Generates 3 new uniquest index numbers for images 
// function newImages() {
//     // previousNumbers = currentNumbers;
//     // currentNumbers = [];
//     for (let i = 0; i < 1; i++) {
//         currentNumbers[i] = newNumbers();
//     }
//     else (currentNumbers[i] <) {
//         newNumbers();
//         render()
//     } 
    
// newImages();
// }

//set the src and alt attributes for images
function render(){
    leftEl.src = Product.allProducts[randomLeft].filepath; //current 
    leftEl.alt = Product.allProducts[randomLeft].name;

    centerEl.src = Product.allProducts[randomCenter].filepath;
    centerEl.alt = Product.allProducts[randomCenter].name;

    rightEl.src = Product.allProducts[randomRight].filepath;
    rightEl.alt = Product.allProducts[randomRight].name;

    //increment the number of times each image was shown
    Product.allProducts[randomLeft].timesDisplayed += 1;
    Product.allProducts[randomCenter].timesDisplayed += 1;
    Product.allProducts[randomRight].timesDisplayed += 1;

    //keep track of these as the previously displayed products
    Product.lastDisplayed[0] = randomLeft;
    Product.lastDisplayed[1] = randomCenter;
    Product.lastDisplayed[2] = randomRight;
}
//define our handleClick function
function handleClick(e) {
    //track the total number of clicks
    Product.totalClicks +=1;

//count the clicks on a specific image
    for(var i in Product.allProducts) {
        if(e.target.alt === Product.allProducts[i].name) {
            Product.allProducts[i].votes +=1;
        }
}

    if (Product.totalClicks > 24) {
        sectionEl.removeEventListener('click', handleClick);
        showResults();
        updateVotes();
        renderChart();
    } else {
        randomProduct();
        render()
    }
}

function showResults() {
    for(var i in Product.allProducts){
        var liEl = document.createElement('li');
        liEl.textContent = Product.allProducts[i].name + ' has ' + Product.allProducts[i].votes + ' votes and was displayed ' + Product.allProducts[i].timesDisplayed + ' times.';
        ulEl.appendChild(liEl);
    }
}

//update the number of votes per product
function updateVotes (){
    for(var i in Product.allProducts) {
        productVotes[i] = Product.allProducts[i].votes;
    }
}
//function to render chart on the screen
function renderChart(){
    var context = document.getElementById('chart-placeholder').getContext('2d');

    //
    var productChart = {
        label: 'Clicks per Product',
        data: productVotes,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        };

    var displayedData = {
        label: 'Times Product Displayed',
        data: timesDisplayed,
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
    };

    var chartOptions = {
        scales: {
            yAxes:[{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };

    var productResults = new Chart(context, {
        type: 'bar',
        data: displayedData,
        options: chartOptions,
    });
}


//event listener on the image
sectionEl.addEventListener('click', handleClick);

randomProduct();
render()