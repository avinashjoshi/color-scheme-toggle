const toggleButton = document.getElementById('color-scheme-toggle');
const themeTextMap = {
  'dark': '&#x263E;&nbsp;&nbsp;Dark Mode',
  'light': '&#x2600;&nbsp;&nbsp;Light Mode',
  'system': '&#x1F5A5;&nbsp;&nbsp;System Theme',
}
let currentTheme = null;

initTheme();
toggleButton.addEventListener('click', () => {
  doToggle();
});

function doToggle() {
  const themeKeys = Object.keys(themeTextMap)
  currentTheme = themeKeys[(themeKeys.indexOf(currentTheme) + 1) % themeKeys.length];
  localStorage.setItem('savedColorScheme', currentTheme)
  applyTheme();
}

function initTheme() {
  currentTheme = localStorage.getItem('savedColorScheme') || 'system';
  applyTheme()
}

function applyTheme() {
  let dataTheme = currentTheme
  if (dataTheme === 'system') {
    dataTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';
  }
  document.documentElement.setAttribute('data-theme', dataTheme);
  toggleButton.innerHTML = themeTextMap[currentTheme];
}