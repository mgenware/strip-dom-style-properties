import * as assert from 'assert';
import * as jsdom from 'jsdom';
import convert from '../';

const { window } = new jsdom.JSDOM();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(global as any).DOMParser = window.DOMParser;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(global as any).HTMLElement = window.HTMLElement;

it('Properties', async () => {
  const actual = convert(
    '<p style="color: #d3d3d3;"><span style="background-color: black; margin-right: 20px; color: #d3d3d3;">haha</span></p>',
    ['color', 'margin-right'],
  );
  assert.equal(
    actual,
    '<p style=""><span style="background-color: black;">haha</span></p>',
  );
});

it('No property matches', async () => {
  const actual = convert(
    '<p style="color: #d3d3d3;"><span style="background-color: black; margin-right: 20px; color: #d3d3d3;">haha</span></p>',
    ['padding-left'],
  );
  assert.equal(
    actual,
    '<p style="color: #d3d3d3;"><span style="background-color: black; margin-right: 20px; color: #d3d3d3;">haha</span></p>',
  );
});
