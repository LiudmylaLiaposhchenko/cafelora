import './style.css';
import { Footer } from './components/Footer/index.js';
import { Header } from './components/Header/index.js';
import { HomePage } from './pages/HomePage';
import { OrderPage } from './pages/OrderPage';

console.log('funguju!');

const pageElement = document.createElement('div');
pageElement.classList.add('page');

const { pathname } = window.location;
if (pathname === '/') {
  pageElement.append(Header({ showMenu: true }));
  pageElement.append(HomePage());
} else if (pathname === '/objednavka') {
  pageElement.append(Header({ showMenu: false }));
  pageElement.append(OrderPage());
}

pageElement.append(Footer());

document.querySelector('#app').append(pageElement);
