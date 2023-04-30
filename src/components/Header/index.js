import './style.css';
export const Header = (props) => {
  const { showMenu } = props;
  const headerElm = document.createElement('header');

  let zminnaHeader = `
    <div id="header" class="header__content container">
      <div class="site-logo"></div>
  `;

  if (showMenu) {
    zminnaHeader += `
      <div class="navigation">
        <button class="nav-btn"></button>
        <nav class="rollout-nav nav-closed">
          <a href="#home">domů</a>
          <a href="#menu">menu</a>
          <a href="#gallery">galerie</a>
          <a href="#contact">kontakt</a>
        </nav>
      </div>
    `;
  } else {
    zminnaHeader += `
      <nav class="inline-nav">
        <a href="/">Hlavní stránka</a>
      </nav>
    `;
  }

  zminnaHeader += '</div>';
  headerElm.innerHTML = zminnaHeader;

  if (showMenu) {
    const buttonElm = headerElm.querySelector('.nav-btn');
    buttonElm.addEventListener('click', () => {
      const rolloutElm = document.querySelector('.rollout-nav');
      rolloutElm.classList.toggle('nav-closed');
    });
  }

  return headerElm;
};
