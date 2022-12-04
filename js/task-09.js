
//==изменить цвет фона елемента body
//==при клике button.change-color
//==вывести значение в span.color (добавить в разметку?)


const refs = {
  changeColor: document.querySelector('.change-color'),
  addSpanColor: document.querySelector('.color')
}

refs.changeColor.addEventListener('click', onClickChangeColor);

function onClickChangeColor() {
  document.body.style.backgroundColor = getRandomHexColor()
  refs.addSpanColor.textContent = getRandomHexColor();
  }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}





