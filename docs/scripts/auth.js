import * as mockroblog from './mockroblog.js'

let username = document.getElementById("username").value;
let password = document.getElementById("password").value; // fucking plaintext
let wrong = document.getElementById("wrong");
let submit = document.getElementById("submit");

let authenticate = authenticateUser(username, password);

if (submit) {
	submit.addEventListener("click",auth);
}

function auth() {
	if authenticate === null { wrong.innerHTML = "Wrong username or password"; }
	else { wrong.innerHTML = "hurray"; }
}
