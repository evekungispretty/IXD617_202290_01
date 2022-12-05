
import { HousePage, PinPage, RecentPage, UserPage, HouseEditPage, UserEditPage, HouseAddPageLocation, UserEditPhotoPage } from "./routes.js";
import { checkSigninForm, checkUserId } from "./sign.js";
import { checkHouseAddForm, checkHouseDeleteForm, checkHouseEditForm, checkPasswordEditForm, checkSignupForm, checkUserEditForm, checkUserEditPhotoForm} from "./form.js";
import { checkUpload } from "./function.js";



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
      // case "house-add-page": HouseAddPage(); break;
      case "house-add-page-location": HouseAddPageLocation(); break;
      case "house-profile-page": HousePage(); break;
      case "user-profile-page": UserPage(); break;
      case "user-edit-page": UserEditPage(); break;
      case "user-edit-photo-page": UserEditPhotoPage(); break;
      case "edit-page": HouseEditPage(); break;
      case "location-edit-page": LocationEditPage(); break;
  }
  })




    
.on("click", "[data-house-id]", function(e) {
  let id = $(this).data("house-id");

  sessionStorage.House_Id = id;
})


.on("click", "[data-house-card]", function(e) {
  let id = $(this).data("house-card");

  sessionStorage.House_Id = id;
})

.on("load", "[data-user-house]", function(e) {
  let id = $(this).data("user-house");

  sessionStorage.userHouse_Id= id;
})






   // EVENT DELEGATION



  .on("submit", "#signin-form", function(e) {
    e.preventDefault();
    checkSigninForm();
  })

  .on("submit", "#signup-form", function(e) {
    e.preventDefault();
    checkSignupForm();
  })

  .on("submit", "#user-edit-form", function(e) {
      e.preventDefault();
      checkUserEditForm();
  })

  .on("submit", "#house-edit-form", function(e) {
    e.preventDefault();
    checkHouseEditForm();
  })

  

  .on("click", ".js-logout", function(e) {
    sessionStorage.removeItem("userId");
    checkUserId();
  })

  .on("click", ".location-jump", function(e) {
    let id = $(this).data("id");

    sessionStorage.locationId = id;
  })

  .on("click", ".js-submit-user-edit-form", function(e) {
    checkUserEditForm();
  })


  .on("click", ".js-submit-password-edit-form", function(e) {
    checkPasswordEditForm();
  })

  .on("click", ".js-submit-user-edit-photo-form", function(e) {
    checkUserEditPhotoForm();
  })





  .on("click", ".js-submit-house-edit-form", function(e) {
    checkHouseEditForm();
  })

  .on("click", ".js-submit-house-add-form", function(e) {
    checkHouseAddForm();
  })

  .on("click", ".js-delete-house", function(e) {
    let id = sessionStorage.House_Id;
    checkHouseDeleteForm();
  })
  


  .on("change", ".user-image", function(e) {
    checkUpload(this.files[0])
    .then((d) => {
        console.log(d);
        let filename = `upload/${d.result}`;
        $(this).parent().prev().val(filename);
        $(this).parent().css({
            "background-image": `url('${filename}')`
        })
    })
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
