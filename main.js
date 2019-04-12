
// viewmode. //
function viewmode_light_mode_1() {
	document.getElementById("big").style.backgroundColor = "#DDDDDD";
	document.getElementById("main").style.fontSize = "";
	document.getElementById("main").style.color = "#000000";
	document.getElementById("main").style.backgroundColor = "#EEEEEE";
	document.cookie = "viewmode=light_mode_1; expires=1 Jan 9999 12:00:00 UTC;";
	console.log("main.js; lightmode(); cookie: viewmode=light_mode_1");
}
function viewmode_dark_mode_1() {
	document.getElementById("big").style.backgroundColor = "#000000";
	document.getElementById("main").style.fontSize = "";
	document.getElementById("main").style.color = "#999988";
	document.getElementById("main").style.backgroundColor = "#000909";
	document.cookie = "viewmode=dark_mode_1; expires=1 Jan 9999 12:00:00 UTC;";
	console.log("main.js; darkmode(); cookie: viewmode=dark_mode_1");
}

function setViewmode(viewmode) {
  if (viewmode == "light_mode_1") {
    viewmode_light_mode_1();
    console.log("main.js; checkCookie(); light_mode_1");
  } 
  if (viewmode == "dark_mode_1") {
    viewmode_dark_mode_1();
    console.log("main.js; checkCookie(); dark_mode_1");
  }
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var viewmode = getCookie("viewmode");
  setViewmode(viewmode);
}
// END viewmode. //

// Blog search bar. //
function BlogSearchbar() {
  console.log("BlogSearchbar()")
  // Go to searchbar.
  input = document.getElementById("blog-searchbar");
  input.scrollIntoView();
  // Declare variables
  var input, filter, ul, li, a, i;
  input = document.getElementById("blog-searchbar");
  console.log(input);
  filter = input.value.toUpperCase();
  console.log(filter);
  ul = document.getElementById("blog-list-posts");
  console.log(ul);
  li = ul.getElementsByTagName("li");
  console.log(li);

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    a = li[i].getElementsByTagName("h2")[0];
    a = li[i];
    console.log(a)
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      console.log("if is true")
    } else {
      li[i].style.display = "none";
      console.log("else is true")
    }
  }
  console.log("BlogSearchbar END")
}
// END Blog search bar. //

//--- MD Editor. ---//
// From https://github.com/benweet/stackedit.js/blob/master/docs/index.md //
/* eslint-disable prefer-arrow-callback, comma-dangle */
/* global Stackedit */

function makeEditButton(el) {
  const div = document.createElement('div');
  div.className = 'stackedit-button-wrapper';
  div.innerHTML = '<a href="javascript:void(0)"><img src="http://icons.iconarchive.com/icons/saki/nuoveXT/96/Small-arrow-right-icon.png">Edit with StackEdit</a>';
  el.parentNode.insertBefore(div, el.nextSibling);
  return div.getElementsByTagName('a')[0];
}

const textareaEl = document.querySelector('textarea');
makeEditButton(textareaEl)
  .addEventListener('click', function onClick() {
    const stackedit = new Stackedit();
    stackedit.on('fileChange', function onFileChange(file) {
      textareaEl.value = file.content.text;
    });
    stackedit.openFile({
      name: 'Markdown with StackEdit',
      content: {
        text: textareaEl.value
      }
    });
  });

const htmlEl = document.querySelector('.html');
let markdown = 'Hello **Markdown** writer!';

function doOpen(background) {
  const stackedit = new Stackedit();
  stackedit.on('fileChange', function onFileChange(file) {
    markdown = file.content.text;
    htmlEl.innerHTML = file.content.html;
  });
  stackedit.openFile({
    name: 'HTML with StackEdit',
    content: {
      text: markdown
    }
  }, background);
}

doOpen(true);
makeEditButton(htmlEl)
  .addEventListener('click', function onClick() {
    doOpen(false);
  });
// --- //