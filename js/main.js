function askQuestions() {

	var firstName = prompt("What is your first name?)");
	var lastName = prompt("What is your last name?");

	var fullName = firstName + " " + lastName;

	$("h2").text("Hello " + fullName);

	var age = prompt("How old are you?");
	age = parseInt(age);

	if (age >= 18) {
		alert("Come on in!");
	} else if (age >= 13) {
		alert("Come back in a few years");
	} else {
			alert("Go away!");
	}

	if (firstName == "General" && lastName != "Assembly") {
		alert("Greetings General");
	}

}

// When th epage loads
$(function() {

	$("img").on("click", askQuestions);


	$("h3").next().hide();

	// when the user clicks an h3
	$('h3').on('click', function() {

		// Hide the next element
		$(this).next().slideToggle(5000);

	});

});