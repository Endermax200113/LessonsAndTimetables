document.write('<div class="ind"></div>');
document.write('<p id="clicker">Нажми меня</p>');

document.addEventListener("click", function(e) {
	var element = e.target;
	var clicker = document.querySelector("#clicker");

	if (element == clicker) {
		if (confirm("Нажмите любую кнопку")) alert('Вы нажали кнопку "Ок"');
		else alert('Вы нажали кнопку "Отмена"');

		return;
	}
});