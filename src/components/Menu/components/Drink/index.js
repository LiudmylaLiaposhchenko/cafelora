import './style.css';
import { Layer } from '../Layer/index.js';

const props = {
  id: 'romano',
  name: 'Romano',
  ordered: false,
  image: 'https://cafelora.kodim.app/assets/cups/romano.png',
  layers: [
    {
      color: '#fbdf5b',
      label: 'citrón',
    },
    {
      color: '#613916',
      label: 'espresso',
    },
  ],
};

export const Drink = (props) => {
  const { id, name, ordered, image, layers } = props;
  const drinkElm = document.createElement('div');
  drinkElm.classList.add('drink');
  drinkElm.innerHTML = `
    <div class="drink__product">
      <div class="drink__cup">
        <img src="${image}">
      </div>
      <div class="drink__info">
        <h3>${name}</h3>
      </div>
    </div>
    <div class="drink__controls"></div>
  `;

  const orderBtnElm = document.createElement('button');
  orderBtnElm.classList.add('order-btn');
  if (ordered) {
    orderBtnElm.textContent = 'Zrušit';
    orderBtnElm.classList.add('order-btn--ordered');
  } else {
    orderBtnElm.textContent = 'Objednat';
    orderBtnElm.classList.remove('order-btn--ordered');
  }

  orderBtnElm.addEventListener('click', () => {
    fetch(`https://cafelora.kodim.app/api/me/drinks/${id}`, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3IiOiJMaXVkbXlsYUxpYXBvc2hjaGVua28iLCJzY3AiOiJhcHAiLCJpYXQiOjE2ODI3NzgzMDJ9.R5r28d5lBtntQi1aZM9mloDl9lc8EVdM6aVxw-AdJRc',
        'Content-Type': 'application/json',
      },
      method: 'PATCH',
      body: JSON.stringify({ ordered: !ordered }),
    })
      .then((respons) => respons.json())
      .then((data) => {
        drinkElm.replaceWith(Drink(data.result));
      });
  });
  const drinkControls = drinkElm.querySelector('.drink__controls');
  drinkControls.append(orderBtnElm);

  const drinkInfoElm = drinkElm.querySelector('.drink__info');
  layers.forEach((layer) => {
    drinkInfoElm.append(Layer(layer));
  });

  return drinkElm;
};
