$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in and updates the HTML on the page;
  // Note: this will always show an empty object if the user is not logged in
  $.get("/api/user_data").then(data => {
    const userData = data;
    const userName = $("<p>").text(
      `Welcome, ${userData.firstname} ${userData.lastname} `
    );
    $(".member-name").append(userName);
    $("userNameDisplay").append(".member-name");
    console.log(data);
  });
});
