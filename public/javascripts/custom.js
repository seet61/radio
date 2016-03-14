$( document ).ready(function(){
    //Navigation menu
    $(".dropdown-button").dropdown();


    //Index page
    //Select
    $('select').material_select();


    //Stream page
    $('.button-collapse').sideNav({
      menuWidth: 700, // Default is 240
      edge: 'left', // Choose the horizontal origin
      //activationWidth: 70,
      left: 0,
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
      }
    );
    //$('.button-collapse').sideNav('show');
});


