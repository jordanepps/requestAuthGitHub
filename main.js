function loadRepo(repo) {
	console.log(repo);
	return `<div><h3>${repo.full_name}</h3><a href="${
		repo.html_url
	}" target="_blank">Link to Repo</a></div>`;
}

function handleRepos(repos) {
	console.log(repos);
	const message = 'User: ' + repos.message || $('#github-user').val();
	console.log(message);
	if (!repos.message) {
		$('#js-error-message').html($('#github-user').val());
		$('#js-user-repos').html(repos.map(loadRepo));
	} else {
		$('#js-error-message').html('No User Found');
		$('#js-user-repos').empty();
	}
}

function getRepos(user) {
	fetch(`https://api.github.com/users/${user}/repos`)
		.then(res => res.json())
		.then(handleRepos)
		.catch(err => console.log(err));
}

function watchForm() {
	$('#js-get-repo-form').submit(e => {
		e.preventDefault();
		const user = $('#github-user').val();
		getRepos(user);
	});
}

function loadApp() {
	watchForm();
}
$(loadApp);
