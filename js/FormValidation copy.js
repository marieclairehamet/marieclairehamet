
function validateFirstName() {//test input for 2-20 allowed characters
	var firstname = document.getElementById("firstname").value;
	var re1 = /^[a-zA-Z\s\'\-]{2,20}$/;

	if (re1.test(firstname)) {//if input is valid, update page to show successful entry
		document.getElementById("firstnamePrompt").style.color = "green";
		document.getElementById("firstnamePrompt").innerHTML = "<strong>valid</strong>"; 
		return true;
	}
	else {//if input is invalid, update page to prompt for new input
		document.getElementById("firstnamePrompt").style.color = "red";
		document.getElementById("firstnamePrompt").innerHTML = "<strong>Enter 2 - 20 characters</strong>";
		return false;

	}
}


function validateLastName(){ //test input for 2-20 allowed characters
	var lastname = document.getElementById("lastname").value;
	var re2 = /^[a-zA-Z\s\'\-']{2,20}$/;

	if (re2.test(lastname)) {//if input is valid
		document.getElementById("lastnamePrompt").style.color = "green";
		document.getElementById("lastnamePrompt").innerHTML = "<strong>valid</strong>"; return true;
}
	else {//if input is invalid
		document.getElementById("lastnamePrompt").style.color = "red";
		document.getElementById("lastnamePrompt").innerHTML = "<strong>Enter 2-20 characters</strong>"; return false;
	}
}

function validateEmail(){ //test input for 2-20 allowed characters
	var email = document.getElementById("email").value;
	var re3 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	if (re3.test(email)) {//if input is valid
		document.getElementById("emailPrompt").style.color = "green";
		document.getElementById("emailPrompt").innerHTML = "<strong>valid</strong>"; return true;
}
	else {//if input is invalid
		document.getElementById("emailPrompt").style.color = "red";
		document.getElementById("emailPrompt").innerHTML = "<strong>Must include @ symbol</strong>"; return false;
	}
}

function validateAge(){ //test input for 2-20 allowed characters
	var age = document.getElementById("age").value;
	// var re4 = /^[0-200]{1,3}$/;

	if (age > 13 && age < 150) {//if input is valid
		document.getElementById("agePrompt").style.color = "green";
		document.getElementById("agePrompt").innerHTML = "<strong>valid</strong>"; return true;
}
	else {//if input is invalid
		document.getElementById("agePrompt").style.color = "red";
		document.getElementById("agePrompt").innerHTML = "<strong>Enter numbers 13-150</strong>"; return false;
	}
}


function validatePhone(){
	var phonenumber = document.getElementById("phonenumber").value;
	var re5 = /^\d{3}-\d{3}-\d{4}$/;

	if (re5.test(phonenumber)) {//if input is valid
		document.getElementById("phonenumberPrompt").style.color = "green";
		document.getElementById("phonenumberPrompt").innerHTML = "<strong>valid</strong>"; return true;
}
	else {//if inpit is invalid
		document.getElementById("phonenumberPrompt").style.color = "red";
		document.getElementById("phonenumberPrompt").innerHTML = "<strong>Use xxx-xxx-xxxx</strong>"; return false;
	}
}	

function validateForm(){
	var firstname = document.getElementById("firstname").value;
	var lastname = document.getElementById("lastname").value;

	console.log(firstname);
	console.log(lastname);

	var validfirstname = validateFirstName();
	var validlastname = validateLastName();
	var validemail = validateEmail();
	var validage = validateAge();
	var validphonenumber = validatePhone();
	var validinfo = validfirstname && validlastname && validemail && validage && validphonenumber;

	
	if (validinfo) { 
		// submit the form
		return true;
	} else { 
		//alert 
		alert ("Fields aren't completed properly!!");
		return false;
	}

}

function myFunction () {
	var x = document.getElementById("myLinks");
	if (x.style.display === "block") {
		x.style.display = "none";
	}
	else {
		x.style.display = "block";
	}
}	
