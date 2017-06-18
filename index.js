$(appready);



const url = 'http://localhost:3000/api/v1/users';

function appready() {
	const source = $('#users-template').html();
	const template = Handlebars.compile(source);
	let users;
	$.get(url).then(response => {
		// console.log(users);
		renderTemplate(response)
	});

	function renderTemplate(users) {
		users.forEach(user => {
			let context = {
				name: user.name,
				email: user.email
			}
			let html = template(context);
			$('main').append(html);
		});
	}
}
