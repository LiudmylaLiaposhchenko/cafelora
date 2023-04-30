import { Banner } from './components/Banner';
import { Menu } from './components/Menu';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';

export const HomePage = (props) => {
  const main = document.createElement('main');
  const menuElm = Menu({ drinks: 'loading' });
  main.append(Banner(), menuElm, Gallery(), Contact());

  fetch('https://cafelora.kodim.app/api/me/drinks', {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3IiOiJMaXVkbXlsYUxpYXBvc2hjaGVua28iLCJzY3AiOiJhcHAiLCJpYXQiOjE2ODI3NzgzMDJ9.R5r28d5lBtntQi1aZM9mloDl9lc8EVdM6aVxw-AdJRc',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      menuElm.replaceWith(Menu({ drinks: data.result }));
    });

  return main;
};
