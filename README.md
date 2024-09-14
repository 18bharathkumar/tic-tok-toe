## here i try to create a tic-tok-toe application using react
npm  and npx should be installed 
using the command
npx create-react-app {app-name}
creates a folder 
by making changes in App.js file you can build the app
## how i deployed this app 
run this command
npm install gh-pages --save-dev
## about gh-pages 
gh-pages is npm package 
The package automates the deployment process by taking the files (typically in the build folder) and pushing them to the gh-pages branch, making it available for GitHub Pages hosting.

gh-pages is the branch of github repository

## update the package.json file
add "homepage": "https://username.github.io/repositoryname",

in scripts add this 
"deploy": "gh-pages -d build"

then push this code by the command
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main

then run the command
npm run deploy
if you not added the deploy script in scripts run 
gh-pages -d build 
this command


