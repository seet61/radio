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

});

function startStream(url, img) {
  //Image of radio station
  $("#btn_play").ready(function(){
    if (img != '') {
      $("#cover-art-small").attr("src", img);
    } else {
      $("#cover-art-small").attr("src", "images/song_default.png");
    }
  });
  //Button play
  $("#btn_play").text("pause_circle_outline");
  /*$("#btn_play").ready(function(){
    console.log('btn text is ' + ($("#btn_play").text() == "play_circle_outline"));
    if ($("#btn_play").text() == "play_circle_outline") {
      $("#btn_play").text("pause_circle_outline");
    } else {
      $("#btn_play").text("play_circle_outline");
    }
  });*/
  //JPLayer
  $("#jquery_jplayer_1").jPlayer({
    ready: function () {
      $(this).jPlayer("setMedia", {
        mp3: url
      });
    },
    cssSelectorAncestor: "#jp_container_1",
    swfPath: "/javascripts",
    supplied: "m4a, oga",
    useStateClassSkin: true,
    autoBlur: false,
    smoothPlayBar: true,
    keyEnabled: true,
    remainingDuration: true,
    toggleDuration: true
  });
};

