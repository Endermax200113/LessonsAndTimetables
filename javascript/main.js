document.write('<div class="ind"></div>');
document.write('<p id="clicker">Нажми меня ещё раз</p>');

var name;

document.addEventListener("click", function(e) {
	var element = e.target;
	var clicker = document.querySelector("#clicker");

	if (element == clicker) {
		name();
		alert("Привет, " + name);

		return;
	}
});

function name() {
	do {
		name = prompt("Как тебя зовут? (Отмена не работает)");
		if (name == "") {
			alert("Ты ничего не ввёл! Введи ещё раз");
			name = null;
		}
	} while (name == "" || name == null);
}