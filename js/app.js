'use strict';

var productArray =[];
var totalClicks = 0;

function getRandomPictureNumber(){
  var randomNumber = Math.floor(Math.random() * productArray.length);
  return randomNumber;
}

var previousIndex = -1;

function renderRandomProduct() {
  var productPictureReference = document.getElementById('productPic1');

  var randomIndex = getRandomPictureNumber();

  while(randomIndex === previousIndex) {
    randomIndex = getRandomPictureNumber();
  }
 
  previousIndex = randomIndex;
  var randomProduct = productArray[randomIndex];

  productPictureReference.src = randomProduct.picturePath;
  productPictureReference.alt = randomProduct.description;
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

renderRandomProduct();

var productPictureReference = document.getElementById('productPic1');
productPictureReference.addEventListener('click', renderRandomProduct);
