$( document ).ready(function(){
    //Navigation menu
    $(".dropdown-button").dropdown();


    //Index page
    //Select
    $('select').material_select();


    //Stream page
    $('.materialboxed').materialbox();
    $('.button-collapse').sideNav({
      menuWidth: 700, // Default is 240
      edge: 'left', // Choose the horizontal origin
      //activationWidth: 70,
      left: 0,
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
      }
    );

    $("#btn_play").click(function(){
      //console.log('btn text is ' + ($("#btn_play").text() == "play_circle_outline"));
      if ($("#btn_play").text() == "play_circle_outline") {
        $("#btn_play").text("pause_circle_outline");
        playSound();
      } else {
        $("#btn_play").text("play_circle_outline");
        pauseSound();
      };
    });
});

function playSound (url) {
  if (url != "") {
    $("#stream").attr("src", url);
  }
  document.getElementById('stream').play();
};

function pauseSound () {
  document.getElementById('stream').pause();
};

function set_volume() {
  //console.log("volume: " + $("span.value").text());
  document.getElementById('stream').volume=parseInt($("span.value").text()) / 100;
};


function startStream(title, url, img) {
  //Image of radio station
  $("#btn_play").ready(function(){
    if (img != '') {
      $("#cover-art-small").attr("src", img);
    } else {
      $("#cover-art-small").attr("src", "images/song_default.png");
    };
  });
  //Station name
  $("#station_name").text(title);
  //Button play
  $("#btn_play").text("pause_circle_outline");
  playSound(url);
};


