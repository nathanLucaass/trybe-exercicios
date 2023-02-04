
const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// Escreva seu código abaixo.

//Primeirol Requisio

const createDaysOfTheMonth = () => {
  let getDaysList = document.getElementById('days');

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    let dayItem = document.createElement('li');
    let day = decemberDaysList[index];
    dayItem.setAttribute('class', 'day');
    if (day === 25) {
      dayItem.classList.add('holiday')
      dayItem.classList.add('friday')
    }
    else if (day === 24 || day === 25 || day === 31) {
      dayItem.classList.add('holiday')
    }
    else if (day === 4 || day === 11 || day === 18 || day === 25) {
      dayItem.classList.add('friday')
    }

    dayItem.innerText = day;
    getDaysList.appendChild(dayItem);
  }


}
createDaysOfTheMonth();

//Segundo Requisito
const displayHolidays = () => {

  let getHolidayButton = document.querySelector('#btn-holiday');

  let getHolidays = document.querySelectorAll('.holiday')

  let backgroundColor = 'rgb(238,238,238)';

  let setNewColor = 'red';

  getHolidayButton.addEventListener('click', () => {

    for (let index = 0; index < getHolidays.length; index += 1) {

      if (getHolidays[index].style.backgroundColor === setNewColor) {

        getHolidays[index].style.backgroundColor = backgroundColor;

      } else {

        getHolidays[index].style.backgroundColor = setNewColor;

      }

    }

  });

}
displayHolidays();

//Exercicio 3
const displayFridays = (fridaysArray) => {

  let getFridayButton = document.querySelector('#btn-friday');

  let fridays = document.getElementsByClassName('friday');

  let newFridayText = 'Sexta fdp';

  getFridayButton.addEventListener('click', () => {

  for (let index = 0; index < fridays.length; index += 1) {

    if (fridays[index].innerHTML !== newFridayText) {

        fridays[index].innerHTML = newFridayText;

        
    } else {

        fridays[index].innerHTML = fridaysArray[index];

        

      }

    }

  });

}
  
  let decemberFridays = [ 4, 11, 18, 25 ];
  
  displayFridays(decemberFridays);

  // Quarto Exercicio
  const almentaDia = () => {
    let days = document.querySelector('#days');
    days.addEventListener('mouseover', (zoom) => {
      zoom.target.style.fontSize = '30px';
    });
  }
  const diminuiDia =() => {
    let days = document.querySelector('#days');
    days.addEventListener('mouseout', (zoom) =>{
      zoom.target.style.fontSize = '20px';
    })
  }
  almentaDia();
  diminuiDia();
