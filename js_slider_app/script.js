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
action(index);

console.log(index);

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

