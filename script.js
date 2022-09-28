new_li.appendChild(new_a);
let new_li2 = document.createElement('li');
let new_a2 = document.createElement('a');
new_a2.setAttribute("href", 'http://www.google.com');
new_a2.innerText = 'Google';

new_li2.appendChild(new_a2);

new_li.appendChild(new_li2);

element_list.appendChild(new_li);

var img;


img = ['https://ied.eu/wp-content/uploads/2018/08/idea.png', 'https://i0.wp.com/tcbassociates.com/wp-content/uploads/2020/07/photo-of-people-doing-handshakes-3183197-scaled.jpg?resize=1132%2C509&ssl=1', 'https://assets.entrepreneur.com/content/3x2/2000/20171215195850-GettyImages-508066399.jpeg?auto=webp&quality=95&crop=16:9&width=675', 'https://www.freshbooks.com/wp-content/uploads/unique-business-ideas-from-around-world.jpg', 'https://media0.giphy.com/media/pxrr47YT7QcLnqhrQe/giphy.gif?cid=ecf05e47v9zanf8cipsvnax8m1acxa39q3y8ev3nu1529r1c&rid=giphy.gif&ct=g'];

let element_pic = document.getElementById('pic');
img.push(img[0]);
element_pic.setAttribute("src", img.shift());


document.getElementById('previous').addEventListener('click', (event) => {
  let element_pic2 = document.getElementById('pic');
  img.unshift(img.slice(-1)[0]);
  element_pic2.setAttribute("src", img.pop());

});

document.getElementById('next').addEventListener('click', (event) => {
  let element_pic3 = document.getElementById('pic');
  img.push(img[0]);
  element_pic3.setAttribute("src", img.shift());

});

<p>Enter your <u>earnings</u> with a <mark>positive</mark> number and your <u>expenses</u> with <mark>negative</mark> number
</p>      
<ul id="list1"></ul>
<ul id="list2"></ul>

<input id="number" placeholder="enter your number here"> 

<button id="button">submit </button>
<hr>
<button id="btn1">press to find total earnings</button>
<br>
<br>
<button id="btn2">press to find total expenses</button>
<br>
<br>
<button id="btn3">press to find balance</button>
<br>
<br>





