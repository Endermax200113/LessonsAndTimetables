document.write('<div class="ind"></div>');
document.write('<div class="ind"></div>');
document.write('<p id="not">Нажмите 1 из 2-х вариантов</p>');
document.write('<p id="yes">Да</p>');
document.write('<p id="no">Нет</p>');

document.addEventListener("click", function(e) {
	if (e.target == document.querySelector("#yes")) alert('Вы нажали текст "Да"!');
	else if (e.target == document.querySelector("#no")) alert('Вы нажали текст "Нет"!');
	else if (e.target == document.querySelector("#not")) alert('Вы нажали не тот текст! ;)');
});