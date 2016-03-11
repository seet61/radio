/*$(".button-collapse").sideNav();
$('.button-collapse').sideNav({
    menuWidth: 300, // Default is 240
    edge: 'right', // Choose the horizontal origin
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
);
// Hide sideNav
$('.button-collapse').sideNav('hide');
// Show sideNav
$('.button-collapse').sideNav('show');
*/

$( document ).ready(function(){
    //Navigation menu
    $(".dropdown-button").dropdown();


    //Index page
    //Select
    $('select').material_select();
});


