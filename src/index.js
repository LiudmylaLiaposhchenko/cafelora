import './style.css';
import { Footer } from './components/Footer/index.js';
import { Header } from './components/Header/index.js';
import { HomePage } from './pages/HomePage';

console.log('funguju!');

const pageElement = document.createElement('div');
pageElement.classList.add('page');
pageElement.append(Header());

const { pathname } = window.location;
if (pathname === '/') {
  pageElement.append(HomePage());
}

pageElement.append(Footer());

document.querySelector('#app').append(pageElement);
