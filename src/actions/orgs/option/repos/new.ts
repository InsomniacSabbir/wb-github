import { ORGS, REPOS } from "../../../../utils/constants";

// @description Create a new repository
open('https://github.com/new')

log(JSON.stringify(options));

const organisationName = options.orgs.name;
let repoName: string | null = args[0]

if (!repoName) {
	repoName = prompt('Name for the new repository')
}

click('#repository_name', { method: 'by_query_selector' })
let repoNameAsString = repoName as string
type(repoNameAsString, '#repository_name', { method: 'by_query_selector' })
log('Checking if the organisation name is provided', 'info')

// if (organisationName) {
// 	click('[aria-describedby="repository-owner-label"]', {
// 		method: 'by_query_selector',
// 	})
// 	click('[data-org-name="' + organisationName + '"]', {
// 		method: 'by_query_selector',
// 	})
// }

click('Private')

log('Creating the repository', 'info')
click('Create repository', {
	expectReload: true,
})
notify('Repository created', 'success', 3000);
reIndex([ORGS, organisationName, REPOS]);
