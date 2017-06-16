$(appready);


const url = 'http://localhost:3000/api/v1/users';

function appready() {
	const source = $('#users-template').html();
	const template = Handlebars.compile(source);
	const users = getUsers(url);
	users.forEach(user => {
		let context = {
			name: user.name,
			email: user.email
		}
		let html = template(context);
		$('main').append(html);
	});
}


function getUsers(url) {
	$.get(url).then(users => {
		console.log(users);
		return users;
	});

}
