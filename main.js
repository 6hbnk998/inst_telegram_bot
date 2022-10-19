

// const heading2 = document.querySelector('h2')

// heading2.classList.add('red')
// console.log(heading2)

// const headings = document.querySelectorAll('h3')
// console.log(headings)

// for (let item of headings){
//     item.classList.add('red')
// }
// const paragraphs = document.querySelectorAll('p')

// for(let parag of paragraphs ){
//     parag.classList.add('green')

// }

// paragraphs.forEach(parag => {
//     parag.classList.add('green')
    
// });

// const heading = document.querySelector('h2')
// console.log(heading.classList.contains('green'));


// const todoList = document.querySelector('#todo-list');
// const todoButton = document.querySelector('button')
// const todoInput = document.querySelector('#todo-input')

// todoButton.addEventListener('click',clickHandler);
// function clickHandler(event){
//     event.preventDefault();
//     const inputText = todoInput.value; 
//     const li = `<li>${inputText}</li>`;
//     todoList.insertAdjacentHTML('beforeend',li);

//     todoInput.value = '';
//     todoInput.focus();
    
// }


// todoButton.addEventListener('click',clickHandler);
// function clickHandler(event){
//     event.preventDefault();
//     const inputText = todoInput.value; 
//     const li = document.createElement('li');
//     li.innerText = inputText;
//     todoList.append(li);

//     const deleteBtn = document.createElement('button')
//     deleteBtn.innerText = 'удалить';
//     li.append(deleteBtn);
//     deleteBtn.style['margin-left'] = '15px';

//     deleteBtn.addEventListener('click', ()  => deleteBtn.closest('li').remove());
    // deleteBtn.addEventListener('click',deleteHandler)
    // function deleteHandler(){
    //     deleteBtn.closest('li').delete();

    // }


//     todoInput.value = '';
//     todoInput.focus();
    
// }

// const set1 = setInterval(function(){
//     console.log('privet');
// },1000);

// setTimeout(function(){
//     clearInterval(set1);
// },10000);

const counterElement = document.querySelector('#counter')
const pauseBtn = document.querySelector('#pause')
const startBtn = document.querySelector('#start')
const resetBtn = document.querySelector('#reset')

let count = 0;
let timerID;

startBtn.addEventListener('click',random1);

function random1(){
    console.log(startBtn);
timerID = setInterval(function(){
    count++;
    counterElement.innerText = count;
}, 1000);
}
pauseBtn.addEventListener('click',pause1);
function pause1(){
    console.log(pauseBtn);
    clearInterval(timerID);
}

resetBtn.onclick = function(){
    count = 0;
    counterElement.innerText = count;
    clearInterval(timerID);
}


const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('#todo-list');
const todoInput = document.querySelector('#todo-input');
const todoSubmit = document.querySelector('#todo-input2');


todoSubmit.addEventListener('click',inputHandler);
function inputHandler(event){
    event.preventDefault();
    const inputValue = todoInput.value;
    const li = document.createElement('li');
    li.append(inputValue);
    todoList.append(li);
    todoInput.value = '';
    todoInput.focus();
};

//ебаные колбэки

// function searchHotels(){
//     console.log('..ищем подходящие отели...');
//     const findHotels = false;
//     return findHotels;
// };

//     if (searchHotels()){
//     console.log('мы едем в отпуск!');
//     }else{
//     console.log('мы в отпуск не едем:(');
// };

// function searchHotels(){
//     console.log('..ищем подходящие отели...');
//     const avaliableHotels = true;

//     if(avaliableHotels){
//         let message = ('Отели найдены')
//         submitvacation(message);
//     }else{
//         let message = ('Отели не найдены')
//         cancelvacation(message);
//     }
    
// };
// searchHotels();

// function submitvacation(message){
//     console.log('Мы едем в отпуск',message);

// };
// function cancelvacation(message){
//     console.log('В отпуск мы не едем',message);
// }

// const myPromise = new Promise(function(resolve,reject){
//     console.log('Promise created');
//     const response = false;

//     if(response){
//         let message = 'SUCCESS';
//         resolve(message);
//     }else{
//         let message = 'FAILED';
//         reject(message);
//     }
// });

// myPromise.then(function(data){
//     console.log('Then');
//     console.log(data);
// }).catch(function(data){
//     console.log('Cathch');
//     console.log(data);
// });

// const newPromise = new Promise(function(resolve,reject){
//     setTimeout(() => resolve(new Error('done')), 1000);

// });
// newPromise.then(
//     result => alert('ok'),
//     error => alert('not ok')
// );

// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => reject(new Error("Whoops!")), 1000);
//   });
  
//   // reject запустит вторую функцию, переданную в .then
//   promise.then(
//     result => alert(result), // не будет запущена
//     error => alert(error) // выведет "Error: Whoops!" спустя одну секунду
//   );
//   </script>

// let promise = new Promise(function(resolve, reject) {
//     resolve(1);
  
//     setTimeout(() => resolve(0), 1000);
//   });
  
// promise.then(alert)

// let promise = new Promise(function(resolve, reject) {

//     setTimeout(() => resolve("done"), 1000);
//   });





// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
// delay(8000).then(() => alert('выполнилось через 3 секунды'));


  
  //ниггеры 

  // const niggas = [
  //   { name: 'hustla1', say: 'Wuzup yo?' },
  //   { name: 'OG', say: 'Gimme yur money man' }
  // ];
 // function niggerSay() {
  //   setTimeout(() => {
  //     let output = '';
  //     niggas.forEach(nigga => {
  //       output += `<li>${nigga.say}</li>`;
  //     });
  //     const ulNigga = document.querySelector('#list');
  //     const li = document.createElement('li');
  //     li.innerHTML = output;
  //     ulNigga.append(li);
      
  //   }, 1000)
  // }
  // function addNigga(man) {
  //   setTimeout(() => {
  //     niggas.push(man);
  //   }, 500)
  // }
  
  // niggerSay();
  // addNigga({ name: 'SupaLooter', say: 'Blak Lies on Mattrass' });
  
const h15 = document.querySelector('#heading-1');
// h15.addEventListener('click',eke);
// function eke(){
//   this.style.backgroundColor = 'red';
// };
h15.onclick = function(){
  this.style.backgroundColor = 'red';
}
const digitsAnimate = document.querySelector('#digits');
digitsAnimate.onclick = function() {
  this.classList.add('animate');

};

function hotelsLook(){
  return new Promise(function(resolve,reject){
  setTimeout(()=>{
    console.log('Ищем номера в отеле')
    const avaliableRooms = true;
    if(avaliableRooms){
      resolve('Отели есть в наличии')
    }else{
      reject('Отелей в наличии нет')
    }
  },500)
})
};

function ckeckTickets(data){
  return new Promise(function(resolve,reject){
  setTimeout(()=>{
    console.log(' function checkTickets')
    console.log('--Ответ на предыдущем шаге--', data)
    const avaliableTickets = true;
    if(avaliableTickets){
      let message = 'Билеты есть'
      resolve(message)
    }else{
      let message = 'Билетов нет'
      reject(message)
    }
  },1000)
})
};

function submitVacation(data){
  console.log('submitVacation')
  console.log('ответ на предыдущем шаге', data)
  console.log('Едем в отпуск')
}
function cancelVacation(data){
  console.log('cancelVacation')
  console.log('ответ на предыдущем шаге', data)
  console.log('Не едем в отпуск')
}



// async function checkPromise(){
//   try{
//     const awaitcheck = await hotelsLook();
//     console.log(awaitcheck)
//   }catch(err){
//     console.log(err)
//   }
// }
// checkPromise()


async function getData(){
  const url = 'https://www.cbr-xml-daily.ru/daily_json.js'
  const response = await fetch(url);
  const data = await response.json();
  const USDdata = data.Valute.USD.Value.toFixed(2);
  const EURData = data.Valute.EUR.Value.toFixed(2);

  const USDel = document.querySelector('#usd');
  const EURel = document.querySelector('#eur')

  USDel.innerText = USDdata;
  EURel.innerText = EURData;
}
getData()

const = 
      const =
          const =
              const =
