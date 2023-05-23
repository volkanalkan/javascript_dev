var models = [
  {
    name : 'Bmw 116d',
    image : 'img/bmw.jpg',
    link : 'https://www.sahibinden.com/bmw-1-serisi-116d'
  },
  {
    name : 'Mazda CX-3',
    image : 'img/mazda.jpg',
    link : 'https://www.sahibinden.com/arazi-suv-pickup-mazda-cx-3-1.5-sky-d'
  },
  {
    name : 'Volvo S60',
    image : 'img/volvo.jpg',
    link : 'https://www.sahibinden.com/volvo-s60'
  },
  {
    name : 'Skoda Superb',
    image : 'img/skoda.jpg',
    link : 'https://www.sahibinden.com/skoda-superb'
  },
  {
    name : 'Honda Civic',
    image : 'img/honda.jpg',
    link : 'https://www.sahibinden.com/honda-civic'
  }
];

var index = 0;
var sliderCount = models.length;
var interval;
var settings = {
  duration : '3000',
  random : false, //it can be false tho!
}

init(settings);

console.log(index);

document.querySelectorAll('.fas').forEach(function(item){
  item.addEventListener('mouseenter', function(){
    clearInterval(interval);
  })
})

document.querySelectorAll('.fas').forEach(function(item){
  item.addEventListener('mouseleave', function(){
    init(settings);
  })
})

function init(settings) {

  var previous;

  interval = setInterval(function(){
    if(settings.random){
      //random index
      do {
        index = Math.floor(Math.random() * sliderCount);
      } while(index == previous) 
        previous = index;
      
    } else {
      //increasing index
      if(sliderCount == index) {
        index = 0;
      }
      action(index);
      console.log(index);
      index++;
    }
    action(index);
  },settings.duration)
}

function action(i){

  index = i;
   if(i < 0) {
    index = sliderCount - 1;
   } else if(i >= sliderCount) {
    index = 0;
   }

  document.querySelector('.card-title').textContent = models[index].name;

  document.querySelector('.card-img-top').setAttribute('src', models[index].image);

  document.querySelector('.card-link').setAttribute('href', models[index].link);

} 

document.querySelector('.fa-arrow-circle-left').addEventListener('click', function(){
  index--;
  action(index);
});

document.querySelector('.fa-arrow-circle-right').addEventListener('click', function(){
  index++;
  action(index);
});

