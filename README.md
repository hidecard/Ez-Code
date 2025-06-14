Login System with Google Sheets and Bootstrap
Overview
A login system using Google Sheets as a database, Google Apps Script as an API, and Bootstrap 5 for the frontend UI. The homepage includes a navbar with a login button that redirects to a login page. Upon successful login, the navbar displays the username and a logout option.
Setup Instructions

Google Sheets Setup:

Create a Google Sheet with a Users sheet.
Add columns: Username and Password.
Example data:Username   Password
user1      pass123
user2      pass456




Apps Script Setup:

Open the Google Sheet and go to Extensions > Apps Script.
Copy the contents of apps-script/Code.gs into the script editor.
Deploy as a web app:
Execute as: Me
Who has access: Anyone


Copy the Web app URL.


Frontend Setup:

Update frontend/login.js with the Web app URL in place of YOUR_APPS_SCRIPT_URL.
Host the frontend files (e.g., on GitHub Pages) or open index.html locally in a browser.


Testing:

Open index.html in a browser.
Click the "Login" button in the navbar to go to login.html.
Enter a username and password from the Users sheet.
On successful login, you will be redirected to index.html with the username displayed in the navbar.
Click "Logout" to return to the default navbar state.



Security Notes

Use HTTPS for all requests.
Consider hashing passwords with SHA-256 in production.
Restrict access to the Google Sheet.
Add API key or OAuth2 for API security.

Tech Stack

Backend: Google Apps Script, Google Sheets
Frontend: HTML, CSS, Bootstrap 5, JavaScript

