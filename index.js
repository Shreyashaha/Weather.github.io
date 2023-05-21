const url = 'https://openweather43.p.rapidapi.com/weather?q=Mumbai&appid=da0f9c8d90bde7e619c3ec47766a42f4&appid=da0f9c8d90bde7e619c3ec47766a42f4&units=standard';
const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': 'f49702418bmshc71b905cdddceccp1d7c43jsnd6ab4b7bb176',
		'X-RapidAPI-Host': 'openweather43.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}