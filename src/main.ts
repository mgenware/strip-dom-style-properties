export default function stripStyleProperties(
  html: string,
  properties: string[],
): string {
  if (!html || !properties || !properties.length) {
    return html;
  }
  const parser = new DOMParser();
  const { body } = parser.parseFromString(html, 'text/html');
  const elements = body.querySelectorAll('[style]');
  for (let i = 0; i < elements.length; i++) {
    const element = elements.item(i);
    if (element instanceof HTMLElement) {
      for (const prop of properties) {
        element.style.removeProperty(prop);
      }
    }
  }
  return body.innerHTML;
}
