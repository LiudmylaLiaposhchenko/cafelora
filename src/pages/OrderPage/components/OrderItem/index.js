import './style.css';

export const OrderItem = (props) => {
  const { name, image } = props;
  const orderItemElm = document.createElement('div');
  orderItemElm.classList.add('order-item');
  orderItemElm.innerHTML = `
    <img src="${image}">
    <div class="order-item__name">${name}</div>
  `;
  return orderItemElm;
};
