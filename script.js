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



var images;


images = ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Juvenile_Ragdoll.jpg/1024px-Juvenile_Ragdoll.jpg', 'https://www.treehugger.com/thmb/VqzSdaokskZ4vx_UuTsYVIOW5lo=/500x0/filters:no_upscale():max_bytes(150000):strip_icc():gifv():format(webp)/GettyImages-593450425-5176c57c7b77417f9dd01dfb43827e7b.jpg', 'https://static.scientificamerican.com/sciam/cache/file/D69F2383-F1B7-48F2-B9E02CADEF218122_source.jpg?w=590&h=800&F42B1AB9-E458-4B17-B837A55D113411EE'];
let element_carousel = document.getElementById('carousel');
element_carousel.setAttribute("src", images[0]);


document.getElementById('previous_button').addEventListener('click', (event) => {
  let element_carousel2 = document.getElementById('carousel');
  images.unshift(images.pop());
  element_carousel2.setAttribute("src", images[0]);

});

document.getElementById('previous_button').addEventListener('click', (event) => {
  let element_image = document.getElementById('image');
  let new_img = document.createElement('img');
  images.unshift(images.pop());
  new_img.setAttribute("src", images[0]);

  element_image.appendChild(new_img);

});

document.getElementById('next_button').addEventListener('click', (event) => {
  let element_carousel3 = document.getElementById('carousel');
  images.push(images.shift());
  element_carousel3.setAttribute("src", images[0]);

});
