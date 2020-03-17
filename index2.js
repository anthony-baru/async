console.log("You are here", "Before")
getUser(1, getRepositories);
console.log('After')

function getRepositories(user) {
    console.log('User', user)
    //get repos
    getRepositories(user.gitHubUsername, getCommits);
}

function getCommits(repos) {
    // let repo1 = repos.repos[0]
    console.log('Repositories', repos)
    getCommits(repos, displayCommits);
}



function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading user from db...')
        callback({ id: id, gitHubUsername: 'mosh' })
    }, 10);
}



function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('Calling Github API....')
        callback({ repos: ['repo1', 'repo2', 'repo3'] });
    }, 10);
}

function getCommits(repo) {
    return 'commits';
}

function displayCommits(commits) {
    console.log(commits)
}