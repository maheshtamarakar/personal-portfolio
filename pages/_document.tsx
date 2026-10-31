import { Html, Head, Main, NextScript } from 'next/document'

// Applies the saved/preferred theme to <html> before paint, so there's no
// flash of the wrong theme while React hydrates. Wrapped in try/catch since
// localStorage/matchMedia can throw (e.g. private browsing).
const themeInitScript = `
(function () {
  try {
    var stored = window.localStorage.getItem('theme');
    var theme = stored === 'dark' || stored === 'light'
      ? stored
      : (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
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
