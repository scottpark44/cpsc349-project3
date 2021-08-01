import * as mockroblog from './mockroblog.js'

let wrong = document.getElementById("wrong");
let submit_login = document.getElementById("submit_login");
let submit_up = document.getElementById("submit_up");

if (submit_login) { submit_login.addEventListener("click",auth_login); }
if (submit_up) { submit_up.addEventListener("click",auth_up); }

function auth_login() {
	
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value; // plaintext lmao
	
	let authy = mockroblog.authenticateUser(username, password);

	if (authy === null) { wrong.innerHTML = "<br><center>Wrong username or password</center>"; }
	else { wrong.innerHTML = "<br><center>Logged in successfully!"; return authy; }
	
}

function auth_up() {
	
	let username = document.getElementById("username").value;
	let email = document.getElementById("email").value;
	let password = document.getElementById("password").value; // plaintext lmao

	mockroblog.createUser(username, email, password);
	location.replace("/pages/login.html");
}

