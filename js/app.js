'use strict';

var pictureOneReference = document.getElementById('productPic1');
var pictureTwoReference = document.getElementById('productPic2');
var pictureThreeReference = document.getElementById('productPic3');

var imageSection = document.getElementById('product-test');

var currentPic1 = 0;
var currentPic2 = 2;
var currentPic3 = 3;

var clickTracker = 0;
var productsArray = [];

function BusMallProduct(picturePath, description) {
  this.picturePath = picturePath;
  this.description = description;
  productsArray.push(this);
}

BusMallProduct.prototype.renderProductPicture = function() {
  pictureOneReference.description = this.description;
  pictureTwoReference.description = this.description;
  pictureThreeReference.description = this.description;
};

function getRandomPictureNumber() {
  var randomNumber = Math.floor(Math.random() * productsArray.length);
  return randomNumber;
}

var productDisplay = function (event) {
  if(event.target.id === 'productPic1' || event.target.id === 'productPic2' || event.target.id ==='productPic3') {
    do {
      var randomPic1 = getRandomPictureNumber();
    } while (randomPic1 === currentPic1 || randomPic1 === currentPic2 || randomPic1 === currentPic3 || randomPic1 === randomPic2 || randomPic1 === randomPic3);
    do {
      var randomPic2 = getRandomPictureNumber();
    } while (randomPic2 === currentPic2 || randomPic2 === currentPic1 || randomPic3 === currentPic3 || randomPic2 === randomPic1 || randomPic2 === randomPic3);
    do {
      var randomPic3 = getRandomPictureNumber();
    } while (randomPic3 === currentPic3|| randomPic3 === currentPic1 || randomPic3 === currentPic2 || randomPic3 === randomPic1 || randomPic3 === randomPic2);
  }
  currentPic1 = randomPic1;
  currentPic2 = randomPic2;
  currentPic3 = randomPic3;

  pictureOneReference.description = productsArray[randomPic1].description;
  pictureTwoReference.description = productsArray[randomPic2].description;
  pictureThreeReference.description = productsArray[randomPic3].description;

  function renderProductPicture1() {
    var productPictureReference = document.getElementById('ProductPic1');
    var randomIndex = randomPic1;
    var randomProduct = productsArray[randomIndex];

    productPictureReference.description = randomProduct.picturePath;
    productPictureReference.alt = randomProduct.description;
  }
  function renderProductPicture2() {
    var productPictureReference = document.getElementById('ProductPic2');
    var randomIndex = randomPic2;
    var randomProduct = productsArray[randomIndex];

    productPictureReference.description = randomProduct.picturePath;
    productPictureReference.alt = randomProduct.description;
  }
  function renderProductPicture3() {
    var productPictureReference = document.getElementById('ProductPic2');
    var randomIndex = randomPic3();
    var randomProduct = productsArray[randomIndex];

    productPictureReference.description = randomProduct.picturePath;
    productPictureReference.alt = randomProduct.description;
  }

  renderProductPicture1();
  renderProductPicture2();
  renderProductPicture3();

  currentPic1.addEventListener('click', productDisplay);
  currentPic2.addEventListener('click', productDisplay);
  currentPic3.addEventListener('click', productDisplay);

  clickTracker++;
  if(clickTracker === 25) {
    imageSection.removeEventListener('click', productDisplay);
  }
};

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

productDisplay();

