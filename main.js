
var userName = document.getElementById('username');
var mail = document.getElementById('mail');
var pass = document.getElementById('pass');
var repass = document.getElementById('repass');
var phone = document.getElementById('num');
var country = document.getElementById('country');
var messeges = document.getElementById('messeges');
	var errors = "";
	var valids = "";
var submitForm = function() {
	var reply = "";
	checkUserName(userName.value);
	checkPassword(pass.value, repass.value);
	checkCountry(country.value);
	checkPhone(phone.value);
	if(errors==="")	{
		alert("good job!");
	}
	else {
		messeges.innerHTML = errors;
		errors = "";
	}


	// messeges.innerHTML = reply
};
var checkUserName = function(name) {

	(name.length<5? errors+=("User name must be over 5 letters<br>"):  valids+=("Thank you " + userName.value + ", user name is valid<br>"));
}
var checkPassword = function(pass, pass2) {
	(pass.length>=6? (pass2===pass1? valids+=("password is valid<br>"): errors+=("passwords doesnt match<br>")): errors+=("password is too short<br>"));
}
var checkCountry = function(country) {
	(country.toLowerCase()==="israel")||(country.toLowerCase()==="usa")? 
	valids+= "country is valid<br>": errors+="country must be israel or usa<br>";
}
var checkPhone = function(phone) {
	phone<100000000000000 && phone>0? valids+="phone is valid<br>": errors+="phone number must be under 15 charachters!<br>";
}
