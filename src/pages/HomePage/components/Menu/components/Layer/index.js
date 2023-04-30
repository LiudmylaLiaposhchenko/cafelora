import './style.css';

const props = {
  color: '#feeeca',
  label: 'mléčná pěna',
};

export const Layer = (props) => {
  const { color, label } = props;
  const layerElm = document.createElement('div');
  layerElm.classList.add('layer');
  layerElm.innerHTML = `
    <div class="layer__color" style="background-color: ${color}"></div>
    <div class="layer__label">${label}</div>
`;
  return layerElm;
};
