import { document, dom, domReady } from './helpers.mjs';
import { expect } from 'chai';

// Sample test suite for JavaScript event handling
describe('Handling Events with JavaScript', () => {
  let changeColorButton;
  let resetColorButton;
  let textInput;
  let keyPressDisplay;
  let textInputDisplay;

  // Wait for DOMContentLoaded before running tests
  before(async () => {
    await domReady;

    changeColorButton = document.getElementById('changeColorButton');
    resetColorButton = document.getElementById('resetColorButton');
    textInput = document.getElementById('textInput');
    keyPressDisplay = document.getElementById('keyPressDisplay');
    textInputDisplay = document.getElementById('textInputDisplay');
  });

  it('should select the changeColorButton element', () => {
    expect(changeColorButton).to.not.be.null;
  });

  it('should select the resetColorButton element', () => {
    expect(resetColorButton).to.not.be.null;
  });

  it('should select the textInput element', () => {
    expect(textInput).to.not.be.null;
  });

  it('should display the key pressed by the user', () => {
    // Simulate key press
    const event = new dom.window.KeyboardEvent('keydown', { key: 'A' });
    document.dispatchEvent(event);

    // Check if the keyPressDisplay has been updated
    expect(keyPressDisplay.textContent).to.include('A');
  });

  it('should display user input in real-time', () => {
    // Simulate user input
    textInput.value = 'Hello';
    const event = new dom.window.Event('input');
    textInput.dispatchEvent(event);

    // Check if the textInputDisplay has been updated
    expect(textInputDisplay.textContent).to.include('Hello');
  });
});
