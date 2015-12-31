var months = {
	1 : 'January',
	2 : 'February',
	3 : 'March',
	4 : 'April',
	5 : 'May',
	6 : 'June',
	7 : 'July',
	8 : 'August',
	9 : 'September',
	10 : 'October',
	11 : 'November',
	12 : 'December'
};

function unixTimeStamp (timeStamp) {
	var d = new Date(timeStamp*1000);
	var month = months[d.getMonth()+1];
	return JSON.stringify({unix: timeStamp, natural: month + " " + d.getDate() + ", " + d.getFullYear()});
}

function parseDate (date) {
	if (/^\d+$/.test(date))
		return unixTimeStamp(date);
	else
	{
		var d = new Date(date);
		if (d == "Invalid Date")
			return {unix: null, natural: null};
		var month = months[d.getMonth()+1];
		return JSON.stringify({unix: (d.getTime()/1000), natural: month + " " + d.getDate() + "," + d.getFullYear()});
	}

}

module.exports = parseDate;