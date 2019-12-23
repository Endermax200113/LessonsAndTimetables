var newsLast = fromElement("#newsLast");
var newsCollege = fromElement("#newsCollege");
var newsGroup = fromElement("#newsGroup");
var newsSite = fromElement("#newsSite");

//last
{
	var dataCollege = infoCollege;
	var dataGroup = infoGroup;
	var dataSite = infoSite;
	let arrNews = [];
	let newArrNews = [];
	let sortArrNews = [];

	for (let i = 0; i < dataCollege.length; i++) {
		let title = dataCollege[i].title;
		let important = dataCollege[i].important;
		let number = dataCollege[i].number;
		let glNumber = dataCollege[i].glNumber;
		let day = dataCollege[i].day;
		let month = dataCollege[i].month;

		arrNews[arrNews.length] = {
			glNumber: glNumber,
			numberArr: i,
			type: "college"
		};
	}

	for (let i = 0; i < dataGroup.length; i++) {
		let title = dataGroup[i].title;
		let important = dataGroup[i].important;
		let number = dataGroup[i].number;
		let glNumber = dataGroup[i].glNumber;
		let day = dataGroup[i].day;
		let month = dataGroup[i].month;

		arrNews[arrNews.length] = {
			glNumber: glNumber,
			numberArr: i,
			type: "group"
		};
	}

	for (let i = 0; i < dataSite.length; i++) {
		let title = dataSite[i].title;
		let important = dataSite[i].important;
		let number = dataSite[i].number;
		let glNumber = dataSite[i].glNumber;
		let day = dataSite[i].day;
		let month = dataSite[i].month;

		arrNews[arrNews.length] = {
			glNumber: glNumber,
			numberArr: i,
			type: "site"
		}
	}

	let count = dataSite.length + dataGroup.length + dataCollege.length;
	for (let i = 0; i < count; i++) {
		newArrNews[i] = i;
		console.log(i);
	}

	for (let i = 0; i < count; i++){
		find(arrNews, i);
	}

	for (let el of arrNews) {
		console.log(el.glNumber);
		console.log(el.numberArr);
		console.log(el.type);
		console.log(" ");
	}
}

//college
{

}

//group
{

}

//site
{

}

function find(arr[], number) {

}