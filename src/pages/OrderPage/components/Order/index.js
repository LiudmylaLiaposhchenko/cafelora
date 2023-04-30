// <p class="empty-order empty-order--hide">Zatím nemáte nic objednáno</p>
// <div class="order__items"></div>

import { OrderItem } from '../OrderItem';

export const Order = (props) => {
  if (props.items === 'loading') {
    const pElm = document.createElement('p');
    pElm.textContent = 'Loading...';
    return pElm;
  } else {
    if (props.items.length === 0) {
      const pElm = document.createElement('p');
      pElm.classList.add('empty-order');
      pElm.textContent = 'Zatím nemáte nic objednáno';
      return pElm;
    } else {
      const divElm = document.createElement('div');
      divElm.classList.add('order__items');

      props.items.forEach((item) => {
        divElm.append(OrderItem(item));
      });

      return divElm;
    }
  }
};
