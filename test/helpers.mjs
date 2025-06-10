// Helpers for setting up the testing environment
import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';


const html = fs.readFileSync(path.resolve('./index.html'), 'utf8');

const scriptContent = fs.readFileSync(path.resolve('./script.js'), 'utf8');

const dom = new JSDOM(html, {
  runScripts: 'dangerously',
  resources: 'usable',
  pretendToBeVisual: true,
});


const scriptEl = dom.window.document.createElement('script');
scriptEl.textContent = scriptContent;
dom.window.document.body.appendChild(scriptEl);

const { document } = dom.window;


const domReady = new Promise(resolve => {
  dom.window.addEventListener('DOMContentLoaded', () => {
    setTimeout(resolve, 20);
  });
});

export { dom, document, domReady };
