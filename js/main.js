var version = "0.0.1.10";

var headerMenu = fromElement(".headerLeftLinkMenu");
var header = fromElement(".header");
var menuOpen = false;

window.addEventListener("load", function(e) {
	console.info("Версия сайта: " + version);
});

document.addEventListener("click", function(e) {
	let element = e.target

	if (!isEmpty(headerMenu) && equalsElements(element, headerMenu)) {
		if (!menuOpen) {
			setStyleEl(header, "height", "145px");
			menuOpen = true;
		} else {
			setStyleEl(header, "height", "35px");
			menuOpen = false;
		}
	}
});

window.addEventListener("resize", function(e) {
	if (!isEmpty(headerMenu)) {
		if (!mobVersion) {
			setStyleEl(header, "height", "70px");
			menuOpen = false;
		} else {
			setStyleEl(header, "height", "35px");
			menuOpen = false;
		}
	}
});