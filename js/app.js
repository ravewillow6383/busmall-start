'use strict';

var productOneId = 'productPic1';
var productTwoId = 'productPic2';
var productThreeId = 'productPic3';

var MAX_CLICKS = 25;

var productArray =[];
var productDescriptions =[];
var totalClicks = 0;

function RandomPictureGenerator(){
  this.previousProductPicture = [];
  this.currentProductIndices = [];

  this.getRandomPictureNumber = function(){
    var randomNumber = Math.floor(Math.random() * productArray.length);
    return randomNumber;
  };

  this.isIndexDuplicated = function(newRandomNumber) {
    return this.currentProductIndices.includes(newRandomNumber) || this.previousProductPicture.includes(newRandomNumber);
  };

  this.generateRandomThreeProducts = function(){
    this.previousProductPicture = this.currentProductIndices;
    this.currentProductIndices = [];

    var newRandomNumber = this.getRandomPictureNumber();

    while(this.currentProductIndices.length < 3){
      if(this.isIndexDuplicated(newRandomNumber)){
        newRandomNumber = this.getRandomPictureNumber();
      } else {
        this.currentProductIndices.push(newRandomNumber);
        newRandomNumber = this.getRandomPictureNumber();
      }
    }
  };
  this.saveRandomNumber = function() {
  };
}

var random = new RandomPictureGenerator();

function renderRandomThreeProducts(event) {
  if(event){
    for (var i = 0; i < productArray.length; i++) {
      if(event.target.alt === productArray[i].description){
        productArray[i].registerClick();
      }
    }
    totalClicks++;
    if(totalClicks === MAX_CLICKS) {
      pictureSectionReferenceOne.removeEventListener('click', renderRandomThreeProducts);

      //   renderChart();
    }
  }
  random.generateRandomThreeProducts();
  var productIndices = random.currentProductIndices;

  var pictureReferenceOne = document.getElementById(productOneId);
  var pictureReferenceTwo = document.getElementById(productTwoId);
  var pictureReferenceThree = document.getElementById(productThreeId);

  var indexOne = productIndices[0];
  var indexTwo = productIndices[1];
  var indexThree = productIndices[2];

  var randomProductOne = productArray[indexOne];
  var randomProductTwo = productArray[indexTwo];
  var randomProductThree = productArray[indexThree];

  pictureReferenceOne.src = randomProductOne.picturePath;
  pictureReferenceOne.alt = randomProductOne.description;
  pictureReferenceTwo.src = randomProductTwo.picturePath;
  pictureReferenceTwo.alt = randomProductTwo.description;
  pictureReferenceThree.src = randomProductThree.picturePath;
  pictureReferenceThree.alt = randomProductThree.description;
}

function BusMallProduct(picturePath, description){
  this.picturePath = picturePath;
  this.description = description;
  this.timesClicked = 0;
  productArray.push(this);
  productDescriptions.push(description);
  this.registerClick = function() {
    this.timesClicked++;
  };
}

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

var pictureSectionReferenceOne = document.getElementById('product-section');
pictureSectionReferenceOne.addEventListener('click', renderRandomThreeProducts);

renderRandomThreeProducts();

// var random = new RandomPictureGenerator();
// random.generateRandomThreeProducts();

// renderRandomThreeProducts(random.currentProductIndices);
