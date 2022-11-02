

// {/* // When the user clicks on <div>, open the popup */}
// function myFunction() {
//   var popup = document.getElementById("myPopup");
//   popup.classList.toggle("show");
// }



// source:https://codepen.io/egstad/pen/kMMYmm
var colors = new Array(
  [254,200,154],
  [255,180,201],
  [229,255,255],
  [255,153,169],
  [254,105,117],
  [255,248,228]);

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.05;

function updateGradient()
{
var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "#"+((r1 << 16) | (g1 << 8) | b1).toString(16);

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "#"+((r2 << 16) | (g2 << 8) | b2).toString(16);

 $('#signin-page').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 20%, "+color2+" 10%)"});
  
  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    
    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }
}

setInterval(updateGradient,50);

import { checkSigninForm, checkUserId } from "./sigin.js";

// Document Ready
$(() => {

  checkUserId();

  $(document)

  .on("pagecontainerbeforeshow", function(event, ui) {
    switch(ui.toPage[0].id) {
      case "recent-page": RecentPage("honk"); break;
      case "pin-page": PinPage("honk"); break;
      case "house-profile-page": HousePage("honk"); break;
      case "user-profile-page": UserPage("honk"); break;
  }
  })

   // EVENT DELEGATION

  .on("submit", "#signin-form", function(e) {
    e.preventDefault();
    checkSigninForm();
  })

  .on("click", ".js-logout", function(e) {
    sessionStorage.removeItem("userId");
    checkUserId();
  })

  .on("click", "[data-activate]", function(e) {
    const target = $(this).data("activate");
    $(target).addClass("active");
  })
  .on("click", "[data-deactivate]", function(e) {
    const target = $(this).data("deactivate");
    $(target).removeClass("active");
  })
  .on("click", "[data-toggle]", function(e) {
    const target = $(this).data("toggle");
    $(target).toggleClass("active");
  })
  .on("click", "[data-activateone]", function(e) {
    const target = $(this).data("activateone");
    $(target).toggleClass("active")
        .siblings().removeClass("active");
  })

});
