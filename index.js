// Log in password
function showLogInPwd(pwd) {
	var x = document.getElementById(pwd);
	if (x.type === pwd) {
		x.type = "text";
	} else {
		x.type = "password";
	}
}

