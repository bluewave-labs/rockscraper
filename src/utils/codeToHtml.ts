import { codeToHtml as shikiCodeToHtml } from 'shiki';

const codeToHtml = async (code: string) => {
  const html = await shikiCodeToHtml(code, {
    lang: 'javascript',
    theme: 'none',
  });
  return html;
};

export default codeToHtml;
