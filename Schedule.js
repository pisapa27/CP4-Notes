var expr = 'selectClass';
	switch (expr) {
		case 'Math':
			selectClass = 'Math'
			console.log('No Calculators');
			break;
		case 'English':
			selectClass = 'English'
			console.log('1 Coffee a Day');
			break;
		case 'History':
			selectClass = 'History'
			console.log('Notebooks Out');
			break;
		case 'French':
			selectClass = 'French'
			console.log('Français dans la classe');
			break;
		case 'Gym':
			selectClass = 'Gym'
			console.log('2 Laps around the Field');
			break;
		case 'Science':
			selectClass = 'Science'
			console.log('Great Day for Science');
			break;
		case 'Theatre Arts':
			selectClass = 'Theatre Arts'
			console.log('Dollar or Jug');
			break;
		case 'Religion':
			selectClass = 'Religion'
			console.log('Vikings will Conquer');
			break;
		case 'Computer Programming':
			selectClass = 'Computer Programming'
			console.log('Everything on Github');
			break;
		case 'Homeroom':
			selectClass = 'Homeroom'
			console.log('Pas de iPads');
			break;
		case 'Speech':
			selectClass = 'Speech'
			console.log('Prennez 5 minutes');
			break;
		case 'Assembly':
			selectClass = 'Assembly'
			console.log('Everybody in your Seats');
			break;
	default:
    console.log('Sorry,' + expr + 'is not a class');
}
