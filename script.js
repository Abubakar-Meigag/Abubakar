let element_list = document.getElementById('list');
let new_li = document.createElement('li');
let new_a = document.createElement('a');
new_a.setAttribute("href", 'http://www.codeyourfuture.io');
new_a.innerText = 'CodeYourFuture';

new_li.appendChild(new_a);
let new_li2 = document.createElement('li');
let new_a2 = document.createElement('a');
new_a2.setAttribute("href", 'http://www.google.com');
new_a2.innerText = 'Google';

new_li2.appendChild(new_a2);

new_li.appendChild(new_li2);

element_list.appendChild(new_li);

var earnings, num, expense, balance;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


earnings = [];
expense = [];
balance = [];


document.getElementById('button').addEventListener('click', (event) => {
  num = getNumberOrString(document.getElementById('number').value);
  if (num >= 0) {
    earnings.push(num);
    let element_list1 = document.getElementById('list1');
    let new_li = document.createElement('li');
    new_li.innerText = num;

    element_list1.appendChild(new_li);
  }
  if (num < 0) {
    expense.push(num);
    let element_list2 = document.getElementById('list2');
    let new_li2 = document.createElement('li');
    new_li2.innerText = num;

    element_list2.appendChild(new_li2);
  }
  balance.push(num);

});

document.getElementById('btn1').addEventListener('click', (event) => {
  event.target.innerText = earnings.reduce((a,b) => a+b, 0);

});

document.getElementById('btn2').addEventListener('click', (event) => {
  event.target.innerText = expense.reduce((a,b) => a+b, 0);

});

document.getElementById('btn3').addEventListener('click', (event) => {
  event.target.innerText = balance.reduce((a,b) => a+b, 0);

});
