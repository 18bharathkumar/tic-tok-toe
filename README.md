## here i try to create a tic-tok-toe application using react
npm  and npx should be installed 
<br>
to initiate react app 
<br>
using the command
<br>
npx create-react-app {app-name}
<br>
 which creates a folder with folder name {app-name}
<br>
by making changes in App.js file you can build the app
<br>
## how i deployed this app 
run this command
<br>
npm install gh-pages --save-dev
## about gh-pages 
gh-pages is npm package 
<br>
The package automates the deployment process by taking the files (typically in the build folder) and pushing them to the gh-pages branch, making it available for GitHub Pages hosting.
<br>
gh-pages is the branch of github repository

## update the package.json file
add "homepage": "https://username.github.io/repositoryname",

in scripts add this 
"deploy": "gh-pages -d build"

then push this code by the command
<br>
git add .
<br>
git commit -m "Initial commit"
<br>
git remote add origin https://github.com/your-username/your-repo-name.git
<br>
git push -u origin main
<br>
then run the command
<br>
npm run build
<br>
npm run deploy
<br>
if you not added the deploy script in scripts run 
<br>
gh-pages -d build 



