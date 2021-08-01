import * as mockroblog from './mockroblog.js'

let wrong = document.getElementById("wrong");
let submit = document.getElementById("submit");

if (submit) { submit.addEventListener("click",auth); }

function auth() {
	
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value; // fucking plaintext

	console.log("username: " + username + ", password: " + password);
	if (mockroblog.authenticateUser(username, password) === null) { wrong.innerHTML = "<br><center>Wrong username or password</center>"; }
	else { wrong.innerHTML = "<meta http-equiv='Refresh' content='0; url='/' />" }
}

