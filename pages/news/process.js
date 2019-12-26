var newsLast = fromElement("#newsLast");
var newsCollege = fromElement("#newsCollege");
var newsGroup = fromElement("#newsGroup");
var newsSite = fromElement("#newsSite");

var dataCollege = infoCollege;
var dataGroup = infoGroup;
var dataSite = infoSite;
var arrNews = [];
var sortArrNews = [];

for (let i = 0; i < dataCollege.length; i++) {
	let title = dataCollege[i].title;
	let important = dataCollege[i].important;
	let glNumber = dataCollege[i].glNumber;
	let day = dataCollege[i].day;
	let month = dataCollege[i].month;

	arrNews[arrNews.length] = {
		glNumber: glNumber,
		title: title,
		important: important,
		day: day,
		month: month
	};
}

for (let i = 0; i < dataGroup.length; i++) {
	let title = dataGroup[i].title;
	let important = dataGroup[i].important;
	let glNumber = dataGroup[i].glNumber;
	let day = dataGroup[i].day;
	let month = dataGroup[i].month;

	arrNews[arrNews.length] = {
		glNumber: glNumber,
		title: title,
		important: important,
		day: day,
		month: month
	};
}

for (let i = 0; i < dataSite.length; i++) {
	let title = dataSite[i].title;
	let important = dataSite[i].important;
	let glNumber = dataSite[i].glNumber;
	let day = dataSite[i].day;
	let month = dataSite[i].month;

	arrNews[arrNews.length] = {
		glNumber: glNumber,
		title: title,
		important: important,
		day: day,
		month: month
	}
}

let count = dataSite.length + dataGroup.length + dataCollege.length;
for (let i = 0; i < count; i++) {
	sortArrNews[i] = find(arrNews, i + 1);
}

let countLast = 0;
for (let i = count - 1; i >= 0; i--) {
	if (countLast == 7) {
		newsLast.innerHTML +=
		'<a href="" class="contentBlockDataNewsButton">' +
			'<div class="contentBlockDataNewsButtonOther">' +
				"Посмотреть все новости" + 
			"</div>" +
		"</a>";

		break;
	}

	let data = sortArrNews[i];

	if (!data.important) {
		newsLast.innerHTML += 
		'<a href="" class="contentBlockDataNewsButton">' + 
			'<div class="contentBlockDataNewsButtonDate">' +
				data.day + " " + parseMonth(data.month) +
			"</div>" + 
			'<div class="contentBlockDataNewsButtonTitle">' +
				data.title + 
			"</div>" +
		"</a>";
	} else {
		newsLast.innerHTML += 
		'<a href="" class="contentBlockDataNewsButton">' + 
			'<div class="contentBlockDataNewsButtonDate">' +
				data.day + " " + parseMonth(data.month) +
			"</div>" + 
			'<div class="contentBlockDataNewsButtonTitle">' +
				data.title + 
			"</div>" +
			'<div class="contentBlockDataNewsButtonImp">' +
				"Важное!"
			"</div>" +
		"</a>";
	} 

	countLast++;
}

for (let i = 0; i < dataCollege.length; i++) {
	if (i == 7) {
		newsCollege.innerHTML += 
		'<a href="" class="contentBlockDataNewsButton">' +
			'<div class="contentBlockDataNewsButtonOther">' +
				"Посмотреть все новости колледжа" + 
			"</div>" +
		"</a>";

		break;
	}

	let data = dataCollege[i];

	if (!data.important) {
		newsCollege.innerHTML += 
		'<a href="" class="contentBlockDataNewsButton">' + 
			'<div class="contentBlockDataNewsButtonDate">' +
				data.day + " " + parseMonth(data.month) +
			"</div>" + 
			'<div class="contentBlockDataNewsButtonTitle">' +
				data.title + 
			"</div>" +
		"</a>";
	} else {
		newsCollege.innerHTML += 
		'<a href="" class="contentBlockDataNewsButton">' + 
			'<div class="contentBlockDataNewsButtonDate">' +
				data.day + " " + parseMonth(data.month) +
			"</div>" + 
			'<div class="contentBlockDataNewsButtonTitle">' +
				data.title + 
			"</div>" +
			'<div class="contentBlockDataNewsButtonImp">' +
				"Важное!"
			"</div>" +
		"</a>";
	}
}

for (let i = 0; i < dataGroup.length; i++) {
	if (i == 7) {
		newsGroup.innerHTML += 
		'<a href="" class="contentBlockDataNewsButton">' +
			'<div class="contentBlockDataNewsButtonOther">' +
				"Посмотреть все новости группы" + 
			"</div>" +
		"</a>";

		break;
	}

	let data = dataGroup[i];

	if (!data.important) {
		newsGroup.innerHTML += 
		'<a href="" class="contentBlockDataNewsButton">' + 
			'<div class="contentBlockDataNewsButtonDate">' +
				data.day + " " + parseMonth(data.month) +
			"</div>" + 
			'<div class="contentBlockDataNewsButtonTitle">' +
				data.title + 
			"</div>" +
		"</a>";
	} else {
		newsGroup.innerHTML += 
		'<a href="" class="contentBlockDataNewsButton">' + 
			'<div class="contentBlockDataNewsButtonDate">' +
				data.day + " " + parseMonth(data.month) +
			"</div>" + 
			'<div class="contentBlockDataNewsButtonTitle">' +
				data.title + 
			"</div>" +
			'<div class="contentBlockDataNewsButtonImp">' +
				"Важное!"
			"</div>" +
		"</a>";
	}
}

for (let i = 0; i < dataSite.length; i++) {
	if (i == 7) {
		newsSite.innerHTML += 
		'<a href="" class="contentBlockDataNewsButton">' +
			'<div class="contentBlockDataNewsButtonOther">' +
				"Посмотреть все новости сайта" + 
			"</div>" +
		"</a>";

		break;
	}

	let data = dataSite[i];

	if (!data.important) {
		newsSite.innerHTML += 
		'<a href="" class="contentBlockDataNewsButton">' + 
			'<div class="contentBlockDataNewsButtonDate">' +
				data.day + " " + parseMonth(data.month) +
			"</div>" + 
			'<div class="contentBlockDataNewsButtonTitle">' +
				data.title + 
			"</div>" +
		"</a>";
	} else {
		newsSite.innerHTML += 
		'<a href="" class="contentBlockDataNewsButton">' + 
			'<div class="contentBlockDataNewsButtonDate">' +
				data.day + " " + parseMonth(data.month) +
			"</div>" + 
			'<div class="contentBlockDataNewsButtonTitle">' +
				data.title + 
			"</div>" +
			'<div class="contentBlockDataNewsButtonImp">' +
				"Важное!"
			"</div>" +
		"</a>";
	}
}

function find(arr, number) {
	for (let el of arr) if (el.glNumber == number) return el;
}

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