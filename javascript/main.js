document.write('<div class="ind"></div>');
document.write('<p id="clicker">Нажми, чтобы ввести значение</p>');

var name;

document.addEventListener("click", function(e) {
	var element = e.target;
	var clicker = document.querySelector("#clicker");

	if (element == clicker) {
		
	}
});