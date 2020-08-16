$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = $("form.signup");
  const emailInput = $("input#email-input");
  const firstNameInput = $("input#first-name");
  const lastNameInput = $("input#last-name");
  const passwordInput = $("input#password-input");


  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      email: emailInput.val().trim(),
      firstname: firstNameInput.val().trim(),
      lastname: lastNameInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.firstname || !userData.lastname || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.firstname, userData.lastname, userData.password);
    emailInput.val("");
    firstNameInput.val("");
    lastNameInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, firstname, lastname, password) {
    $.post("/api/signup", {
      email: email,
      firstname: firstname,
      lastname: lastname,
      password: password
    })
      .then(() => {
        window.location.replace("/indexlogged");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  // function handleLoginErr(err) {
  //   console.log(err);
  //   $("#alert .msg").text(JSON.stringify (err.responseJSON));
  //   $("#alert").fadeIn(500);
  // }

  // This function displays an error message when a field is left blank on the sign up page

function LoginErr () {
if 

}


});


