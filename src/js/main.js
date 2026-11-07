import Base from "./Base"

const themeButton = document.querySelector('#theme');
const updateThemeButton = () => {
    const dark = document.documentElement.dataset.theme === 'dark';
    themeButton.setAttribute('aria-pressed', String(dark));
    themeButton.title = dark ? 'Switch to light mode' : 'Switch to dark mode';
};
themeButton.addEventListener('click', () => {
    const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('shapes-theme', theme); } catch { /* Theme still works without storage. */ }
    updateThemeButton();
});
updateThemeButton();

const base = new Base(document.querySelector('canvas.webgl'));
