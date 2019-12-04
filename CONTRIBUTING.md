# Build
The declaration files are auto generated(as new Corvid apis are added all the time) 

To generate the files, simply run
`npm i && npm run build`

# Test
`npm run test`

# Publish to npm
On master branch, run [`npm version [<newversion> | major | minor | patch | ...] -m <commit message>`](https://docs.npmjs.com/cli/version)

The `npm version` command performs the following tasks:
1. Update the version in package.json to the new version
2. Create a new commit
3. Create a git tag

Next, just push you changes to github including your new tag by running `git push origin master --tag` 