# Color Scheme Toggle [ 🖥 | 🌙 | ☀️ ]
A simple javascript to toggle your website between [ 🖥 system theme | 🌙 dark mode | ☀️ light mode ]
- Defaults to system theme
- Your preference is saved to local storage

# Usage
1. Add your custom button for the toggle followed by the `color-scheme-toggle.js` script:
```html
<button id="color-scheme-toggle"></button>
<script src="color-scheme-toggle.js"></script>
```
*The script could even go before the closing body tag, but not before the button*

2. Follow `color-scheme-toggle.css` as an example (or the sample css provided below) and adapt in your stylesheet.

# Under the hood
The script adds `data-theme="dark"` to the `html` tag. You can use css like this:
```css
:root {
    --body-bg: white;
    --body-color: black;
}

:root[data-theme='dark'] {
    --body-bg: black;
    --body-color: white;
}

body {
    background-color: var(--body-bg);
    color: var(--body-color);
}
```

# Demo
Visit the [Demo page](https://avinashjoshi.github.io/color-scheme-toggle) to see this in action!

# Browser compatibility
- Toggling between light and dark should be supported by most modern browsers that support javascript
- The system theme compatibility can be seen here - https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme#Browser_compatibility

# Sticky footer
I simply followed the [recipe laid out by Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook/Sticky_footers). This does not seem to work on Firefox.
