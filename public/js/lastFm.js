console.log("lastFm loaded");

$(document).ready(() => {
  let InputUser = "";
  // let dataArtist;
  function clear() {
    $("#searchResults").empty();
    // $("#search-bar").val("");
  }
  function ajaxCall() {
    // Get API key. =
    // var queryURL = "http://ws.audioscrobbler.com/2.0/?api_key=e39c7207b0471e72e0194b83a89dcef6&format=json&method=track.search&track=" + InputUser;
    const queryURL =
      // "http://ws.audioscrobbler.com/2.0/?api_key=e39c7207b0471e72e0194b83a89dcef6&format=json&method=artist.gettoptracks&artist=" +
      "http://ws.audioscrobbler.com/2.0/?api_key=e39c7207b0471e72e0194b83a89dcef6&format=json&method=track.search&track=" +
      InputUser;
      console.log(queryURL);
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(data => {
      console.log(data);
      // dataArtist = data;
      // $.ajax({
      //   url: "http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=e39c7207b0471e72e0194b83a89dcef6&format=json&artist=Cher&album=Believe",
      //   method: "GET"
      // }).then(function(response) {
      //   console.log(response);
      // });
      clear();
      //get picture from album

      for (let i = 0; i < 40; i++) {
        let artist = data.results.trackmatches.track[i].artist;
        const albumUrl =
          "http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&api_key=e39c7207b0471e72e0194b83a89dcef6&format=json&artist=" +
          artist;
        $.get(albumUrl, albumData => {
          const image = albumData.topalbums.album[i].image[1]["#text"];
          
          const bootstrapCardEl = $(
            "<div class=\"card bg-transparent\" style=\"width: 16rem;\"></div>"
          );
          const cardImgEl = $("<img src=" + image + "></img>");
          const cardBodyEl = $(
            '<div class="card-body">' +
              "<h5>" +
              data.results.trackmatches.track[i].artist +
              "</h5>" +
              "</div>"
          );
          const h5El = $(
            "<h5 class=\"card-title\">" +
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
          );

          cardBodyEl.append(h5El).append(bodytemp);
          bootstrapCardEl.append(cardImgEl).append(cardBodyEl);
          $("#searchResults").append(bootstrapCardEl);
        });
      }
    });
  }
  function ajaxCall2() {
    const albQueryURL =
      "http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&api_key=e39c7207b0471e72e0194b83a89dcef6&format=json&artist=" +
      InputUser;
    $.ajax({
      url: albQueryURL,
      method: "GET"
    }).then(data => {
      console.log(data);
      clear();
      for (let i = 0; i < 40; i++) {
        const bootstrapCardEl = $(
          "<div class=\"card bg-transparent\" style=\"width: 16rem;\"></div>"
        );
        const cardImgEl = $(
          "<img src=" + data.topalbums.album[i].image[1]["#text"] + "></img>"
        );
        const cardBodyEl = $(
          '<div class="card-body">' + "<h5>" + data.topalbums.album[0].artist.name + "</h5>" + "</div>"
        );
        const h5El = $(
          "<h5 class=\"card-title\">" + data.topalbums.album[i].name + "</h5>"
        );
        const bodytemp = $(
          // `<p class="card-text">
          // <a href=${data.results.trackmatches.track[i].url} target="_blank>
          // Listen Here!</a></p>`
          '<p class="card-text">' +
            "<a href=" +
            data.topalbums.album[i].url +
            " target='_blank'>" +
            "Listen Here!</a>" +
            "</p>"
        );

        cardBodyEl.append(h5El).append(bodytemp);
        bootstrapCardEl.append(cardImgEl).append(cardBodyEl);
        $("#searchResults").append(bootstrapCardEl);
      }
    });
  }

  const searchElement = $("#songSearch");
  searchElement.click(() => {
    InputUser = $("#search-bar").val();
    ajaxCall();
  });

  const searchElementalbum = $("#albumSearch");
  searchElementalbum.click(() => {
    InputUser = $("#search-bar").val();
    ajaxCall2();
  });

  // const searchElement = $("#search-bar");
  // $(searchElement).on("keypress", e => {
  //   if (e.key === "Enter") {
  //     event.stopPropagation();
  //     event.preventDefault();
  //     console.log("User pressed 'Enter'");
  //     //   keyWord = $("#userInput").val();
  //     InputUser = $("#search-bar").val();
  //     console.log("User input:", InputUser);
  //     ajaxCall();
  //   }
  // });
});
