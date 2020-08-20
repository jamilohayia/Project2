console.log("lastFm loaded");

$(document).ready(() => {
  let InputUser = "";
  function ajaxCall() {
    // Get API key. =
    // var queryURL = "http://ws.audioscrobbler.com/2.0/?api_key=e39c7207b0471e72e0194b83a89dcef6&format=json&method=track.search&track=" + InputUser;
    const queryURL =
      "http://ws.audioscrobbler.com/2.0/?api_key=e39c7207b0471e72e0194b83a89dcef6&format=json&method=artist.gettoptracks&artist=" +
      InputUser;
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(data => {
      console.log(data);
    });
  }
  const searchElement = $("#search-bar");
  $(searchElement).on("keypress", e => {
    if (e.key === "Enter") {
      event.stopPropagation();
      event.preventDefault();
      console.log("User pressed 'Enter'");
      //   keyWord = $("#userInput").val();
      InputUser = $("#search-bar").val();
      console.log("User input:", InputUser);
      ajaxCall();
    }
  });
});
