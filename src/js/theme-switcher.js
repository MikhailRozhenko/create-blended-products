import { refs } from './refs';
import { getFromLS, saveToLS } from './storage';

export function themeSwitch(event) {
  refs.buttonThemeSwitch.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.nodeName !== 'BUTTON') {
      return;
    }

    if (refs.body.classList.contains('theme-dark')) {
      refs.body.classList.add('theme-light');
      refs.body.classList.remove('theme-dark');
      saveToLS('theme', 'light');
    } else {
      refs.body.classList.add('theme-dark');
      refs.body.classList.remove('theme-light');
      saveToLS('theme', 'dark');
    }
  });
}
export function applySavedTheme() {
  const savedTheme = getFromLS('theme');

  if (savedTheme === 'dark') {
    refs.body.classList.add('theme-dark');
    refs.body.classList.remove('theme-light');
  } else {
    refs.body.classList.remove('theme-dark');
    refs.body.classList.add('theme-light');
  }
}
