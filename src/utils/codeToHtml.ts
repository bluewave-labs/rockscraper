import { createHighlighter, ThemeRegistrationResolved } from 'shiki';
import rockScraperTheme from './codeTheme.json'

const codeToHtml = async (code: string) => {
  const highlighter = await createHighlighter({
    themes: [rockScraperTheme as unknown as ThemeRegistrationResolved],
    langs: [],
  });
  const html = highlighter.codeToHtml(code, {
    lang: 'javascript',
    theme: 'none',
  });
  return html;
};

export default codeToHtml;
