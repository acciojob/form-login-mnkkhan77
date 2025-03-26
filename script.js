function getFormvalue() {
    //Write your code here
	event.preventDefault();
    
    // Retrieve values from First Name and Last Name fields
    let form = document.getElementById("form1");
    let firstName = form.elements["fname"].value;
    let lastName = form.elements["lname"].value;
    
    alert(firstName + " " + lastName);
}