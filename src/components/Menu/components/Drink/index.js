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
    <div class="drink__controls">
      <button class="order-btn">
        Objednat
      </button>
    </div>
  `;

  const drinkInfoElm = drinkElm.querySelector('.drink__info');
  layers.forEach((layer) => {
    drinkInfoElm.append(Layer(layer));
  });

  return drinkElm;
};
