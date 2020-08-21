console.log("lastFm loaded");

$(document).ready(() => {
  let InputUser = "";
  function clear() {
    $("#searchResults").empty();
    $("#search-bar").val("");
  }
  function ajaxCall() {
    // Get API key. =
    // var queryURL = "http://ws.audioscrobbler.com/2.0/?api_key=e39c7207b0471e72e0194b83a89dcef6&format=json&method=track.search&track=" + InputUser;
    const queryURL =
      // "http://ws.audioscrobbler.com/2.0/?api_key=e39c7207b0471e72e0194b83a89dcef6&format=json&method=artist.gettoptracks&artist=" +
      "http://ws.audioscrobbler.com/2.0/?api_key=e39c7207b0471e72e0194b83a89dcef6&format=json&method=track.search&track=" +
      InputUser;
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(data => {
      console.log(data);
      // $.ajax({
      //   url: "http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=e39c7207b0471e72e0194b83a89dcef6&format=json&artist=Cher&album=Believe",
      //   method: "GET"
      // }).then(function(response) {
      //   console.log(response);
      // });
      clear();

      for (let i = 0; i < 40; i++) {
        const bootstrapCardEl = $(
          '<div class="card bg-transparent" style="width: 16rem;"></div>'
        );
        const cardImgEl = $(
          "<img src=" +
            data.results.trackmatches.track[i].image[1]["#text"] +
            "></img>"
        );
        const cardBodyEl = $(
          '<div class="card-body">' +
            "<h5>" +
            data.results.trackmatches.track[i].artist +
            "</h5>" +
            "</div>"
        );
        const h5El = $(
          '<h5 class="card-title">' +
            data.results.trackmatches.track[i].name +
            "</h5>"
        );
        const bodytemp = $(
          // `<p class="card-text">
          // <a href=${data.results.trackmatches.track[i].url} target="_blank> 
          // Listen Here!</a></p>`
          '<p class="card-text">' +
            "<a href=" +
            data.results.trackmatches.track[i].url +
            " target='_blank'>" +
            "Listen Here!</a>" +
            "</p>"
          // target="_blank" missing
        );
        const bodyPEl = $(
          '<p class="card-text">' +
            "LISTENERS:  " +
            data.results.trackmatches.track[i].listeners +
            "</p>"
        );
        cardBodyEl
          .append(h5El)
          .append(bodytemp)
          .append(bodyPEl);
        bootstrapCardEl.append(cardImgEl).append(cardBodyEl);
        $("#searchResults").append(bootstrapCardEl);
      }
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
