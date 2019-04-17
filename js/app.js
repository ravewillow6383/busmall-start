'use strict';
var productOneId = 'productPic1';
var productTwoId = 'productPic2';
var productThreeId = 'productPic3';

var MAX_CLICKS = 25;

var productArray =[];
var productDescriptions[];
var totalClicks = 0;

function RandomPictureGenerator(){
  this.previousProductPicture = [-1, -2, -3];
  this.currentProductPicture = [];

  this.getRandomPictureNumber = function(){
    var randomNumber = Math.floor(Math.random() * productArray.length);
    return randomNumber;
  }

  this.isIndexDuplicated = function(newRandomNumber) {
    return this.currentIndices.includes(newRandomNumber) || this.previousIndices.includes(newRandomNumber);
  }
  this.generateRandomThreeProducts = function(){
    this.currentProductPicture = [];

    var newRandomNumber = this.getRandomPictureNumber();

    while(this.currentProductPicture.length < 3){
      if(this.currentProductPicture.includes(newRandomNumber)){
        newRandomNumber = this.getRandomPictureNumber();
      } else {
        this.currentProductPicture.push(newRandomNumber);
        newRandomNumber = this.getRandomPictureNumber();
      }
    }
  };
}

function renderRandomThreeProducts(productIndices) {
  var pictureReferenceOne = document.getElementById(productOneId);
  var pictureReferenceTwo = document.getElementById(productTwoId);
  var pictureReferenceThree = document.getElementById(productThreeId);

  var indexOne = productIndices[0];
  var indexTwo = productIndices[1];
  var indexThree = productIndices[2];  

  var randomProductOne = productArray[indexOne];
  var randomProductTwo = productArray[indexTwo];
  var randomProductThree = productArray[indexThree];


  pictureReferenceOne.src = productOneId.picturePath;
  pictureReferenceOne.alt = productOneId.description;
  pictureReferenceTwo.src = productTwoId.picturePath;
  pictureReferenceTwo.alt = productTwoId.description;
  pictureReferenceThree.src = productThreeId.picturePath;
  pictureReferenceThree.alt = productThreeId.description;
}

function BusMallProduct(picturePath, description){
  this.picturePath = picturePath;
  this.description = description;
  this.timesClicked = 0;
  productArray.push(this);
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

renderRandomThreeProducts();

var productPictureReference = document.getElementById(productOneId);
productPictureReference.addEventListener('click', renderRandomThreeProducts);

var random = new RandomPictureGenerator();
random.generateRandomThreeProducts();

renderRandomThreeProducts(productIndices);