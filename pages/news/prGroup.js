var group = fromElement("#group");

var dataGroup = infoGroup;
let arrNews = [];

for (let i = 0; i < dataGroup.length; i++) {
	let title = dataGroup[i].title;
	let important = dataGroup[i].important;
	let glNumber = dataGroup[i].glNumber;
	let day = dataGroup[i].day;
	let month = dataGroup[i].month;
	let number = dataGroup[i].number;

	arrNews[arrNews.length] = {
		glNumber: glNumber,
		title: title,
		important: important,
		day: day,
		month: month,
		type: "group",
		number: number
	};
}

let countGroup = 0;
let stopNumber = 0;
var textHTML = "";
also();

function parseMonth(number) {
	if (number == 1) return "янв";
	else if (number == 2) return "фев";
	else if (number == 3) return "мар";
	else if (number == 4) return "апр";
	else if (number == 5) return "май";
	else if (number == 6) return "июн";
	else if (number == 7) return "июл";
	else if (number == 8) return "авг";
	else if (number == 9) return "сен";
	else if (number == 10) return "окт";
	else if (number == 11) return "ноя";
	else if (number == 12) return "дек";
	else return null;
}

function find(arr, number) {
	for (let el of arr) if (el.glNumber == number) return el;
}

function also() {
	for (let i = stopNumber; i < arrNews.length; i++) {
		if (countGroup == 10) {
			group.innerHTML = textHTML + 
			'<div class="contentBlockDataNewsButton" onclick="also();">' +
				'<div class="contentBlockDataNewsButtonOther">' +
					"Показать ещЁ новости" + 
				"</div>" +
			"</div>";

			stopNumber = i;
			countGroup = 0;
			break;
		}

		let data = arrNews[i];

		textHTML += 
		'<a href="' + data.type + "/news" + data.number + '.html" class="contentBlockDataNewsButton">' + 
			'<div class="contentBlockDataNewsButtonDate">' +
				data.day + " " + parseMonth(data.month) +
			"</div>" + 
			'<div class="contentBlockDataNewsButtonTitle">' +
				data.title + 
			"</div>" +
			parseImportant(data.important) + 
		"</a>";

		countGroup++;

		if (i == dataGroup.length - 1) {
			countGroup = 0;
			stopNumber = 0;
			group.innerHTML = textHTML;

			break;
		}
	}
}

function parseImportant(imp) {
	if (imp) {
		return '<div class="contentBlockDataNewsButtonImp">' +
			"Важное!" +
		"</div>";
	} else return "";
}