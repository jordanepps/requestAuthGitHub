function getUserRepos(user) {
	fetch(`https://api.github.com/users/${user}/repos`)
		.then(res => res.json())
		.then(resJSON => console.log(resJSON))
		.catch(err => console.log(err));
}

function watchForm() {
	$('#js-get-repo-form').submit(e => {
		e.preventDefault();
		const user = $('#github-user').val();
		getUserRepos(user);
	});
}

function loadApp() {
	watchForm();
}
$(loadApp);
