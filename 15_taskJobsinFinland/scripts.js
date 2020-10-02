/* back to top button */

//Get the button:
var mybutton = document.getElementById('myBtn');

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/* toggle search bar */

$(document).ready(function () {
  $('.fa-search').click(function () {
    $('.togglesearch').toggle();
    $("input[type='text']").focus();
  });
});

/* nav bar sticky */

// Get the navbar
var navbar = document.getElementById('navbar');

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

/* Execute functions onscroll */

// Execute sticky nav bar and scroll function for back to top button
window.onscroll = function () {
  myFunction();
  scrollFunction();
};
