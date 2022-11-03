const entities = [
  {
    img: './images/projects.svg',
    dot: document.querySelector('.dot-1'),
    line: document.querySelector('.line-decorate-1'),
    city: 'Rostov-on-Don<br>LCD admiral',
    area: '81 m2',
    time: '3.5 months'
  },
  {
    img: './images/projects-1.png',
    dot: document.querySelector('.dot-2'),
    line: document.querySelector('.line-decorate-2'),
    city: 'Sochi<br>Thieves',
    area: '105 m2',
    time: '4 months'
  },
  {
    img: './images/projects-2.png',
    dot: document.querySelector('.dot-3'),
    line: document.querySelector('.line-decorate-3'),
    city: 'Rostov-on-Don<br>Patriotic',
    area: '93 m2',
    time: '3 months'
  }
]

const slider = document.querySelector('.slider');
const arrowLeft = document.querySelector('.slider-arrow-left');
const arrowRight = document.querySelector('.slider-arrow-right');

//Поменять картинку
function setEntity(index) {
  slider.style.backgroundImage = `url(${entities[index].img})`;
}

//Неактивные -> активные элементы
function makeActive(index) {
  entities[index].dot.style.opacity = 1;
  entities[index].line.classList.add('brown-hypertext');
}

//Активные -> неактивные элементы
function makeInactive(index) {
  entities[index].dot.style.opacity = 0.3;
  entities[index].line.classList.remove('brown-hypertext');
}

//Смена содержимого
function changeTextContent(index) {
  document.querySelector('.city-text').innerHTML = entities[index].city;
  document.querySelector('.area').innerHTML = entities[index].area;
  document.querySelector('.time').innerHTML = entities[index].time;
}

//Переключение нажатием на точку/заголовок
function pressOnElement (index) {
  makeInactive(currentIndex);
  changeTextContent(index);
  currentIndex = index;
  setEntity(currentIndex);
  makeActive(currentIndex);
}

let currentIndex = 0;

//Левая стрелка
arrowLeft.addEventListener('click', () => {
  makeInactive(currentIndex);

  if (currentIndex == 0) {
    currentIndex = entities.length - 1;
  } else {
    currentIndex -= 1;
  }

  changeTextContent(currentIndex);
  setEntity(currentIndex);
  makeActive(currentIndex);
})

//Правая стрелка
arrowRight.addEventListener('click', () => {
  makeInactive(currentIndex);

  if (currentIndex == entities.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex += 1;
  }

  changeTextContent(currentIndex);
  setEntity(currentIndex);
  makeActive(currentIndex);
})

//Точка и Заголовок
for (let i = 0; i <= entities.length - 1; i++) {
  entities[i].dot.addEventListener('click', () => {
    pressOnElement(i);
  });
  entities[i].line.addEventListener('click', () => {
    pressOnElement(i);
  });
}