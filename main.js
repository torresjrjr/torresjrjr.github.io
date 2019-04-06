
// viewmode. //
function lightmode() {
	document.getElementById("big").style.backgroundColor = "#FFFFFF";
	document.getElementById("main").style.fontSize = "";
	document.getElementById("main").style.color = "#000000";
	document.getElementById("main").style.backgroundColor = "#DDDDDD";
	document.cookie = "viewmode=light_mode_1; expires=1 Jan 9999 12:00:00 UTC;";
	console.log("main.js; lightmode(); cookie: viewmode=light_mode_1")
}
function darkmode() {
	document.getElementById("big").style.backgroundColor = "#000000";
	document.getElementById("main").style.fontSize = "";
	document.getElementById("main").style.color = "#999988";
	document.getElementById("main").style.backgroundColor = "#000909";
	document.cookie = "viewmode=dark_mode_1; expires=1 Jan 9999 12:00:00 UTC;";
	console.log("main.js; darkmode(); cookie: viewmode=dark_mode_1")
}

console.log("main.js; cookie reader script start")

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
  if (viewmode == "light_mode_1") {
    lightmode()
    console.log("main.js; checkCookie(); light_mode_1")
  } 
  if (viewmode == "dark_mode_1") {
  	darkmode()
  	console.log("main.js; checkCookie(); dark_mode_1")
  }
}

console.log("main.js; cookie reader script end")

// Blog search bar. //

function BlogSearchbar() {
  console.log("BlogSearchbar")
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
