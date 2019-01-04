function loadRepo(repo) {
	return `<div><h3>${repo.full_name}</h3><a href="${
		repo.html_url
	}" target="_blank">Link to Repo</a></div>`;
}

function handleNoUser() {
	$('#js-status-message').html('User Not Found');
	$('#js-user-repos').empty();
}

function handleUserExists(repos) {
	$('#js-status-message').html(`User: ${$('#github-user').val()}`);
	$('#js-user-repos').html(repos.map(loadRepo));
}

function handleRepos(repos) {
	repos.message ? handleNoUser() : handleUserExists(repos);
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
