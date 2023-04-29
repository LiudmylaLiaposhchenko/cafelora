import './style.css';
import { Drink } from './components/Drink/index.js';

export const Menu = (props) => {
  const { drinks } = props;
  const menuElm = document.createElement('section');
  menuElm.classList.add('menu');
  menuElm.id = 'menu';
  menuElm.innerHTML = `
    <div class="container">
      <h2>Naše nabídka</h2>
      <p class="menu-intro">
        Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
      </p>
      <div class="drinks-list"></div>
      <div class="order-detail"></div>
    </div>
  `;

  const drinksListElm = menuElm.querySelector('.drinks-list');
  if (drinks === 'loading') {
    drinksListElm.innerHTML = 'Loading';
  } else {
    drinks.forEach((napoj) => {
      const drinkElm = Drink(napoj);
      drinksListElm.append(drinkElm);
    });
  }

  const detailElm = document.createElement('a');
  detailElm.href = '/objednavka';
  detailElm.textContent = 'Detail objednávky';
  const orderDetailElm = menuElm.querySelector('.order-detail');
  orderDetailElm.append(detailElm);

  return menuElm;
};
