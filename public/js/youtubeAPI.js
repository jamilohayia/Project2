// You will need a Google API Key to make this work -> console.developers.google.com 
// link below will help set up the the Youtube video search call:
// https://dev.to/aveb/making-your-first-get-request-to-youtube-search-api-4c2f
console.log("videos.js loaded");

var key = config.yt1 + config.yt2 + config.yt3

$(document).ready(function () {

  showTrendingMusicVideos();

  function showTrendingMusicVideos() {
    $.ajax({
      url: `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cplayer&key=${key}&maxResults=4&regionCode=US&videoCategoryId=10&chart=mostPopular`,
      type: "GET",

      success: function (response) {
        // console.log(response)

        // var header = $("<h5>").html("U.S Top Trending Music Videos").attr("id", "youtubeHeader")
        // $("#youtubeTrending").prepend(header)
        $("#youtubeHeader").css('display','block')

        for (var i = 0; i < 5; i++) {
          let videoItem = response.items;
          console.log(videoItem)
          embedVideo(videoItem);
        }
        function embedVideo(x) {
          console.log(x)
          // div with all the video info
          var videoContainer = $("<div>").html(x[i].player.embedHtml).attr({id: "ytItem"})
          // combined 
          $("#youtubeTrending").append(videoContainer)
      
        }
        // end of response function
      }
      // end of the ajax call
    });
    // end of the startSearch function
  }
  //end of document.ready 
});

