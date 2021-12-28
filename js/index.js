$(document).ready(function(){

	$("#header").load("header.html");
	$("#footer").load("footer.html");
});

function sentMsg(){

	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	var email = document.getElementById("email").value;
	var subject = document.getElementById("subject").value;
	var message = document.getElementById("message").value;

	var ready = false;
	
	ready = checkEmpty(email, subject, message);

	if(ready){
		alert("Thank you for your Contact!")
		sentEmail(fname, lname, email, subject, message);
		document.getElementById("email").value = "";
		document.getElementById("subject").value = "";
		message = document.getElementById("message").value = "";
	}


}

function checkEmpty(email, subject, message){

	var emailResult = false;
	var subjectResult = false;
	var messageResult = false;

	if(email == 0){
		$("#label-email").addClass("make-red");
		$("#email").addClass("add-red-border");
		emailResult = false;
	}else{
		$("#label-email").removeClass("make-red");
		$("#email").removeClass("add-red-border");
		emailResult = true;
	}

	if(subject == 0){
		$("#label-subject").addClass("make-red");
		$("#subject").addClass("add-red-border");
		subjectResult = false;
	}else{
		$("#label-subject").removeClass("make-red");
		$("#subject").removeClass("add-red-border");
		subjectResult = true;
	}

	if(message == 0){
		$("#label-message").addClass("make-red");
		$("#message").addClass("add-red-border");
		messageResult = false;
	}else{
		$("#label-message").removeClass("make-red");
		$("#message").removeClass("add-red-border");
		messageResult = true;
	}

	return (emailResult && subjectResult && messageResult);
}

function hout(){
	var email = document.getElementById("email").value;
	var subject = document.getElementById("subject").value;
	var message = document.getElementById("message").value;
	checkEmpty(email, subject, message);
}

function sentEmail(fname, lname, message, subject, message){
	console.log(fname + message);
}