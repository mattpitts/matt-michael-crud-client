$(appReady);


function appReady() {

	const query = window.location.href
	const id = query[query.length-1];
	const url = 'http://localhost:3000/api/v1/users/'+id;
	getUser(url)
}


function getUser(url, id) {
	Promise.all([
		$.get(url),
		$.get(url + '/games')
	]).then((userGames) => {
		renderUser(userGames);
	});
}

function renderUser(user) {
	console.log(user);
	const source = $('#users-template').html();
	const template = Handlebars.compile(source);
	let context = {
		email: user[0][0].email,
		createdAt: user[0][0].created_at,
	}
	let html = template(context);
	$('main').append(html);
	renderGames(user[1]);
}

function renderGames(gamesArray) {
	gamesArray.forEach(game => {
		let source = $('#games-template').html();
		let template = Handlebars.compile(source);
		let context = {
			name: game.name,
			genre: game.genre,
			dev: game.developer
		}
		let html = template(context);
		$('main').append(html);
	});
}
