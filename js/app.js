'use strict';

var productImage1 = document.getElementById(‘productPic1’);
var productPic2 = document.getElementById(‘productPic2’);
var productPic3 = document.getElementById(‘productPic3’);

var currentPic1 = 0;
var currentPic2 = 1;
var currentPic3 = 2;

var productsArray = [];

function getRandomPictureNumber() {
    var randomNumber = Math.floor(Math.random() * productsArray.length);
    return randomNumber;
  }

var productDisplay = function(event) {
    if(event.target.id === 'productPic1' || event.target.id === 'productPic2' || event.target === 'productPic3') {
        do {
            var randomPic1 = getRandomPictureNumber();
        } while (randomPic1 === currentPic1 || randomPic1 === currentPic2 || randomPic1 === currentPic3);
        do {
            var randomPic2 = getRandomPictureNumber();
        } while (randomPic2 === currentPic1 || randomPic2 === currentPic2 || randomPic2 === currentPic3 || randomPic2 === randomPic1);       
        do {
            var randomPic3 = getRandomPictureNumber();
        } while (randomPic3 === currentPic1 || randomPic3 === currentPic2 || randomPic3 === currentPic3 || randomPic3 === randomPic1 || randomPic3 === randomPic2);
    }
    function renderProductPicture1() {
        var productPictureReference = document.getElementById('ProductPic1');
      
        var randomIndex = randomPic1;
    
        var randomProduct = productsArray[randomIndex];
      
        productPictureReference.src = randomProduct.picturePath;
        productPictureReference.alt = randomProduct.description;



}
function renderProductPicture2() {
  var productPictureReference = document.getElementById('ProductPic2');

  var randomIndex = getRandomPictureNumber();

  while(randomIndex === previousIndex) {
    randomIndex = getRandomPictureNumber();
  }
  previousIndex = randomIndex;

  var randomProduct = productsArray[randomIndex];

  productPictureReference.src = randomProduct.picturePath;
  productPictureReference.alt = randomProduct.description;
}
function renderProductPicture3() {
  var productPictureReference = document.getElementById('ProductPic2');

  var randomIndex = getRandomPictureNumber();

  while(randomIndex === previousIndex) {
    randomIndex = getRandomPictureNumber();
  }

  previousIndex = randomIndex;

  var randomProduct = productsArray[randomIndex];

  productPictureReference.src = randomProduct.picturePath;
  productPictureReference.alt = randomProduct.description;
}

function BusMallProduct(picturePath, description) {
  this.picturePath = picturePath;
  this.description = description;
  productsArray.push(this);
}

BusMallProduct.prototype.renderProductPicture = function() {
  productPic1.src = this.src;
  productPic2.src = this.src;
  productPic3.src = this.src;
};
    currentPic1 = randomPic1;
    currentPic2 = randomPic2;
    currentPic3 = randomPic3;

    productPic1.src = productsArray[randomPic1].src;
    productPic2.src = productsArray[randomPic2].src;
    productPic3.src = productsArray[randomPic3].src;
}

imageSection.addEventListener('click', productDisplay);

new BusMallProduct('img/bag.jpg', 'starwars luggage');
new BusMallProduct('img/banana.jpg', 'banana slicer');
new BusMallProduct('img/bathroom.jpg', 'joint toilet paper and teblet stand');
new BusMallProduct('img/boots.jpg', 'open toe rain boots');
new BusMallProduct('img/breakfast.jpg', 'multi-functional breakfast tool');
new BusMallProduct('img/bubblegum.jpg', 'chewy balls');
new BusMallProduct('img/chair.jpg', 'modern red chair');
new BusMallProduct('img/cthulhu.jpg', 'classic Lovecraft monster');
new BusMallProduct('img/dog-duck.jpg', 'sad looking dog');
new BusMallProduct('img/dragon.jpg', 'canned dragon meat');
new BusMallProduct('img/pen.jpg', '2 in 1 cutlery and pen tool');
new BusMallProduct('img/pet-sweep.jpg', 'mop slippers for your poor dog');
new BusMallProduct('img/scissors.jpg', 'pizza scissors');
new BusMallProduct('img/shark.jpg', 'shark shaped sleeping bag');
new BusMallProduct('img/sweep.png', 'mop onsie for your poor baby');
new BusMallProduct('img/tauntaun.jpg', 'horse sleeping bag with helmet');
new BusMallProduct('img/unicorn.jpg', 'magical meat');
new BusMallProduct('img/usb.gif', 'tentacle drive');
new BusMallProduct('img/water-can.jpg', 'watering can');
new BusMallProduct('img/wine-glass.jpg', 'spill-safe wine glass');

renderProductPicture1();
renderProductPicture2();
renderProductPicture3();

var productPictureReference = document.getElementById('ProductPic1');
productPictureReference.addEventListener('click', renderProductPicture1);
