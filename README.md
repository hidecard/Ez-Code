Hidecard Login System
Overview
A login system using Google Sheets as a database and Google Apps Script as an API. The frontend is built with Bootstrap 5 and hosted on Vercel. Passwords are stored as plain text in Google Sheets.
File Structure
📁 hidecard
├── 📄 spreadsheet.gsheet
├── 📁 apps-script
│   ├── 📄 Code.gs
│   ├── 📄 Config.gs
├── 📁 frontend
│   ├── 📄 index.html
│   ├── 📄 login.html
│   ├── 📄 style.css
│   ├── 📄 script.js
│   ├── 📄 login.js
└── 📝 README.md

Setup Instructions

Google Sheets Setup:
Create a Google Sheet with a Users sheet.
Add columns: Username and Password.
Example data:Username   Password
user1      pass123
user2      pass456




Apps Script Setup:
Open the Google Sheet and go to Extensions > Apps Script.
Copy Code.gs and Config.gs into the script editor.
Update Config.gs with your redirect URL (https://ez-code-theta.vercel.app/index.html).
Deploy as a web app (Deploy > New Deployment):
Execute as: Me
Who has access: Anyone


Copy the Web App URL (e.g., https://script.google.com/macros/s/AKfycbyu9Qhe352oHWEpMSTrj3LQVSpgdioRs4OhmNa6EDrMbf7JEwBzXSeNC4bhIYH9oadx/exec).


Frontend Setup:
Create a Vercel project and add frontend folder files (index.html, login.html, style.css, script.js, login.js).
Ensure login.js uses the correct Apps Script Web App URL.
Deploy to https://ez-code-theta.vercel.app.


Testing:
Open https://ez-code-theta.vercel.app/login.html.
Enter a valid username and password (e.g., user1, pass123).
On success, it redirects to https://ez-code-theta.vercel.app/index.html with username as a query parameter.



Security Notes

Passwords are stored as plain text, which is not recommended for production. Consider using hashing (e.g., SHA-256) for better security.
Use HTTPS for all requests.
Restrict Google Sheet access to authorized users.
Set Access-Control-Allow-Origin to https://ez-code-theta.vercel.app in production.

Tech Stack

Backend: Google Apps Script, Google Sheets
Frontend: HTML, CSS, JavaScript, Bootstrap 5
Hosting: Vercel

Troubleshooting

CORS Issues:
Check Network tab in browser DevTools for OPTIONS request and response headers.
Ensure Access-Control-Allow-Origin is set correctly.


Apps Script Errors:
Check View > Executions in Apps Script editor.
Debug with Logger.log(JSON.stringify(e)).


Test API:curl -X POST -H "Content-Type: application/json" -d '{"username":"user1","password":"pass123","redirectUrl":"index.html"}' https://script.google.com/macros/s/AKfycbyu9Qhe352oHWEpMSTrj3LQVSpgdioRs4OhmNa6EDrMbf7JEwBzXSeNC4bhIYH9oadx/exec



