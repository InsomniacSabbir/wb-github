// @description Close the issue
if (options.issues) {
	open(options.issues.html_url)
	click('Close issue')
	notify('Issue closed', 'success', 3000)
	reIndex(['repos', options.repos.name, 'issues'])
} else {
	notify('Issue not found', 'error', 3000)
}
