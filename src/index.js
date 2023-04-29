import './style.css';
import { Footer } from './components/Footer/index.js';
import { Header } from './components/Header/index.js';
import { Banner } from './components/Banner/index.js';
import { Menu } from './components/Menu/index.js';
import { Gallery } from './components/Gallery/index,js';
import { Contact } from './components/Contact/index.js';

console.log('funguju!');

const pageElement = document.createElement('div');
pageElement.classList.add('page');

const main = document.createElement('main');
const menuElm = Menu({ drinks: 'loading' });
main.append(Banner(), menuElm, Gallery(), Contact());

pageElement.append(Header(), main, Footer());

document.querySelector('#app').append(pageElement);

fetch('https://cafelora.kodim.app/api/me/drinks', {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3IiOiJMaXVkbXlsYUxpYXBvc2hjaGVua28iLCJzY3AiOiJhcHAiLCJpYXQiOjE2ODI3NzgzMDJ9.R5r28d5lBtntQi1aZM9mloDl9lc8EVdM6aVxw-AdJRc',
  },
})
  .then((response) => response.json())
  .then((data) => {
    menuElm.replaceWith(Menu({ drinks: data.result }));
  });
