import './style.css';
export const Header = (props) => {
  const headerElm = document.createElement('header');
  headerElm.innerHTML = `
  <div id="header" class="header__content container">
    <div class="site-logo"></div>

    <div class="navigation">
      <button class="nav-btn"></button>
      <nav class="rollout-nav nav-closed">
        <a href="#home">domů</a>
        <a href="#menu">menu</a>
        <a href="#gallery">galerie</a>
        <a href="#contact">kontakt</a>
      </nav>
    </div>
  </div>
   `;

  const buttonElm = headerElm.querySelector('.nav-btn');
  buttonElm.addEventListener('click', () => {
    const rolloutElm = document.querySelector('.rollout-nav');
    rolloutElm.classList.toggle('nav-closed');
  });

  return headerElm;
};
