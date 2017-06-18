$(appReady);


function appReady() {

	$('#formSubmit').click((event) => {
		event.preventDefault();
		let newGameObject = {
			user_id: $('#userId').val(),
			name: $('#gameName').val(),
			genre: $('#gameGenre').val(),
			developer: $('#gameDev').val()
		}
		const url = 'http://localhost:3000/api/v1/users/' + newGameObject.user_id +'/games'
		$.post(url, newGameObject).then(res => {
			console.log(res);
		})
	});
}
