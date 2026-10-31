import { Html, Head, Main, NextScript } from 'next/document'

// Applies the saved theme to <html> before paint, so there's no flash of
// the wrong theme while React hydrates. Wrapped in try/catch since
// localStorage can throw (e.g. private browsing). Defaults to light
// regardless of OS preference - dark mode only applies once the visitor
// has explicitly toggled it (and is then remembered via localStorage).
const themeInitScript = `
(function () {
  try {
    var stored = window.localStorage.getItem('theme');
    var theme = stored === 'dark' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
