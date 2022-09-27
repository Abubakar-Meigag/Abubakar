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

