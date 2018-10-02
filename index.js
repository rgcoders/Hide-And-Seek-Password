// Log in password
function showLogInPwd(pwd) {
	var x = document.getElementById(pwd);
	if (x.type === pwd) {
		x.type = "text";
	} else {
		x.type = "password";
	}
}

// Update password
function showUpdatePwd() {
	var x = document.getElementById('current-pw');
	var y = document.getElementById('new-pw');
	var arr = [x, y];
		arr.forEach(function (arg, index) {

			if (arg.type === "password") {
				arg.type = "text";
			} else {
				arg.type = "password";
			}
		})
};
