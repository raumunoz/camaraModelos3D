 /*
  **********************************************************
  * OPAQUE NAVBAR SCRIPT
  **********************************************************
  */

  // Toggle tranparent navbar when the user scrolls the page

  var navBar = $("#topNav");
  var hdrHeight = $("header").height();
  
  
  $(window).scroll(function() {
    if( $(this).scrollTop() > hdrHeight + 50) {
      navBar.addClass("navScrolled");
    } else {
      navBar.removeClass("navScrolled");
    }
  });
  