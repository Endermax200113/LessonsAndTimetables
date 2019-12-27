var site = fromElement("#site");

var dataSite = infoSite;
let arrNews = [];

for (let i = 0; i < dataSite.length; i++) {
	let title = dataSite[i].title;
	let important = dataSite[i].important;
	let glNumber = dataSite[i].glNumber;
	let day = dataSite[i].day;
	let month = dataSite[i].month;
	let number = dataSite[i].number;

	arrNews[arrNews.length] = {
		glNumber: glNumber,
		title: title,
		important: important,
		day: day,
		month: month,
		type: "site",
		number: number
	};
}

let countSite = 0;
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
		if (countSite == 10) {
			site.innerHTML = textHTML + 
			'<div class="contentBlockDataNewsButton" onclick="also();">' +
				'<div class="contentBlockDataNewsButtonOther">' +
					"Показать ещЁ новости" + 
				"</div>" +
			"</div>";

			stopNumber = i;
			countSite = 0;
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

		countSite++;

		if (i == dataSite.length - 1) {
			countSite = 0;
			stopNumber = 0;
			site.innerHTML = textHTML;

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