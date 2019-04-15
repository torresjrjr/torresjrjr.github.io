import Stackedit from 'stackedit-js';


const el = document.querySelector('textarea');
const stackedit = new Stackedit();

// Open the iframe
stackedit.openFile({
  name: 'Filename', // with an optional filename
  content: {
    text: el.value // and the Markdown content.
  }
});

// Listen to StackEdit events and apply the changes to the textarea.
stackedit.on('fileChange', (file) => {
  el.value = file.content.text;
});

// Conversion Service.
stackedit.openFile({
  name: 'Filename',
  content: { text: 'Hello **Markdown** writer!' }
}, true /* silent mode */);

// In silent mode, the `fileChange` event is emitted only once.
stackedit.on('fileChange', (file) => {
  divEl.innerHTML = file.content.html;
});