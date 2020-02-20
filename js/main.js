var version = "0.1.1.74";

var headerMenu = fromElement(".headerLeftLinkMenu");
var header = fromElement(".header");
var body;
var menuOpen = false;

window.addEventListener("load", function(e) {
	console.info("Версия сайта: " + version);

	body = fromElement("body").innerHTML;
	fromElement("body").innerHTML = "Введите пароль";
	fromElement("body").style = "display: flex; justify-content: center; align-items: center;"

	setTimeout(password, 1000);
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

function password() {
	if (prompt("Для доступа к сайту введите пароль\n\nВ дальнейшем, лучше скопируйте пароль, если она верна") != "236poIsTheBest") {
		alert("К сожалению, Вы ввели неверный пароль");
		fromElement("body").innerHTML = "Нет доступа";
	} else {
		fromElement("body").style = "";
		fromElement("body").innerHTML = body;
	}
}