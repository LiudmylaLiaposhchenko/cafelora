import './style.css';
import { Order } from './components/Order';

export const OrderPage = (props) => {
  const main = document.createElement('main');
  main.classList.add('order');
  main.innerHTML = `
    <div class="order__content container">
      <h1>Vaše objedávnka</h1>
    </div>
  `;

  const orderElm = Order({ items: 'loading' });
  main.querySelector('.order__content').append(orderElm);

  fetch('https://cafelora.kodim.app/api/me/drinks', {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3IiOiJMaXVkbXlsYUxpYXBvc2hjaGVua28iLCJzY3AiOiJhcHAiLCJpYXQiOjE2ODI3NzgzMDJ9.R5r28d5lBtntQi1aZM9mloDl9lc8EVdM6aVxw-AdJRc',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const items = data.result.filter((napoj) => {
        return napoj.ordered;
      });
      orderElm.replaceWith(Order({ items: items }));
    });

  return main;
};
