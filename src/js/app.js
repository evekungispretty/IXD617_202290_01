
import { HousePage, PinPage, RecentPage, UserPage, HouseEditPage } from "./routes.js";
import { checkSigninForm, checkUserId } from "./sign.js";
// import { accordion } from "./expand.js";
// accordion ();

// Document Ready
$(() => {

  checkUserId();

  $(document)

  .on("pagecontainerbeforeshow", function(event, ui) {
    switch(ui.toPage[0].id) {
      case "recent-page": RecentPage(); break;
      case "pin-page": PinPage(); break;
      case "house-profile-page": HousePage(); break;
      // case "house-card-page": HouseCardPage(); break;
      case "user-profile-page": UserPage(); break;
      case "edit-page": HouseEditPage(); break;
  }
  })

    
.on("click", "[data-house-id]", function(e) {
  let id = $(this).data("house-id");

  sessionStorage.House_Id = id;
})


// .on("click", "[data-house-card]", function(e) {
//   let id = $(this).data("house-card");

//   sessionStorage.userid = id;
// })

.on("load", "[data-user-house]", function(e) {
  let id = $(this).data("user-house");

  sessionStorage.userHouseId= id;
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

.on("click", ".location-jump", function(e) {
  let id = $(this).data("id");

  sessionStorage.locationId = id;
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
