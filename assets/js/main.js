
function lightmode() {
	document.getElementById("big").style.backgroundColor = "#FFFFFF";
	document.getElementById("main").style.fontSize = "";
	document.getElementById("main").style.color = "#000000";
	document.getElementById("main").style.backgroundColor = "#DDDDDD";
}
function darkmode() {
	document.getElementById("big").style.backgroundColor = "#000000";
	document.getElementById("main").style.fontSize = "";
	document.getElementById("main").style.color = "#999988";
	document.getElementById("main").style.backgroundColor = "#000909";
}

// Attempt at using a cookie //
// example to help:
// document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
document.cookie = "viewmode=dark_mode_1; expires=1 Jan 9999 12:00:00 UTC;";