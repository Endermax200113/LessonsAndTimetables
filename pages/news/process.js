var newsLast = fromElement("#newsLast");
var newsCollege = fromElement("#newsCollege");
var newsGroup = fromElement("#newsGroup");
var newsSite = fromElement("#newsSite");

//last
{
	var countNewsLast = news[0].count;
	var countNewsCollege = college[0].count;
	var countNewsGroup = group[0].count;
	var countNewsSite = site[0].count;
	var dataCollege = infoCollege;
	var dataGroup = infoGroup;
	var dataSite = infoSite;
	let listLast = 0;

	for (let i = countNewsCollege - 1; i >= 0; i--) {
		let title = dataCollege[i].title;
		let important = dataCollege[i].important;
		let number = dataCollege[i].number;
		let glNumber = dataCollege[i].glNumber;
		let day = dataCollege[i].day;
		let month = dataCollege[i].month;



		listLast++;
	}

	for (let i = countNewsGroup - 1; i >= 0; i--) {
		let title = dataGroup[i].title;
		let important = dataGroup[i].important;
		let number = dataGroup[i].number;
		let glNumber = dataGroup[i].glNumber;
		let day = dataGroup[i].day;
		let month = dataGroup[i].month;

		
		
		listLast++;
	}

	for (let i = countNewsSite - 1; i >= 0; i--) {
		let title = dataSite[i].title;
		let important = dataSite[i].important;
		let number = dataSite[i].number;
		let glNumber = dataSite[i].glNumber;
		let day = dataSite[i].day;
		let month = dataSite[i].month;

		

		listLast++;
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