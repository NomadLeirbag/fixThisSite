var elements = document.getElementsByTagName("style");
for(var i = 0; i < elements.length; i++) {
	elements[i].parentNode.removeChild(elements[i]);
	}
elements = document.getElementsByTagName("link");
for(var i = 0; i < elements.length; i++) {
	if(elements[i].getAttribute("rel") == "stylesheet" || elements[i].getAttribute("rel") == "Stylesheet") {
		elements[i].parentNode.removeChild(elements[i]);
		}
	}
var all = document.getElementsByTagName("*");
for(i = 0; i < all.length; i++) {
	all[i].setAttribute("style", "");
	all[i].setAttribute("background", "");
	all[i].setAttribute("bgcolor", "");
	all[i].setAttribute("color", "");
	all[i].setAttribute("border", "none");
}