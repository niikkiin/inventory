export function getCurrentDate(separator = ', ', space = ' ') {
	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	let newDate = new Date();
	let date = newDate.getDate();
	let month = newDate.getMonth() + 1;
	let year = newDate.getFullYear();

	let monthName = monthNames[month];

	// return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`;
	return `${monthName}${space}${date}${separator}${year}`;
}
