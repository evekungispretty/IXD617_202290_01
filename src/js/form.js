import { query } from "./function.js";


export const checkSignupForm = () => {
    let username = $("#signup-username").val();
    let email = $("#signup-email").val();
    let password = $("#signup-password").val();
    let confirm = $("#signup-confirm").val();
    
    if (password !== confirm) {
        // tell user to try again
        $(".warning_password").css("display", "block");
        setTimeout(()=>{$(".warning_password").css("display", "none");},3000)
        console.log("Failure");
        throw("password failed, show the user");
        return;
    }

    query({
        type: 'insert_user',
        params: [
            username,
            email,
            password
        ]
    }).then((data)=>{
        if (data.error) {
            $(".warning").css("display", "block");
            setTimeout(()=>{$(".warning").css("display", "none");},3000)
            console.log("Failure");
            // We should show how they failed to them
            
        } else {
            sessionStorage.userId = data.id;
            $.mobile.navigate("#recent-page");
            
        }
    })
}



// export const checkSignupFormStep1 = () => {


//     let username = $("#signup-username").val();
//     let email = $("#signup-email").val(); 

//     if (username == "")
//     {
//         $(".warning").css("display", "block");
//         $(".js-submit-check-username").attr("disabled", true);
//     }
//     else
//     {
//         query({
//             type: 'check_user',
//             params: [
//                 username,
//                 email
//             ]
//         }).then((data)=>{
//             if (data.error) {
//                 $("#msg").html('<span class="text-danger">Username is already taken!</span>');
//                 $(".js-submit-check-username").attr("disabled", true);
                
//             } else {
//                 // sessionStorage.userId = data.id;
//                 $.mobile.navigate("#signup-page");   
//             }
//         })

//     }

// }


   
    // let username = $("#signup-username").val();
    // let email = $("#signup-email").val();

    // if (username == undefined || username.name == ' ' || email == undefined || email == ' ') {
    //     // tell user to try again
    //     $(".warning").css("display", "block");
    //     setTimeout(()=>{$(".warning").css("display", "none");},3000)
    //     console.log("Failure");
    //     throw(data.error);
    //     return;
    // }
    // else {
    // sessionStorage.userId = data.id;
    // $.mobile.navigate("#signup-page");
    







 
export const checkUserEditForm = () => {
    let name = $("#user-edit-name").val();
    let username = $("#user-edit-username").val();
    let email = $("#user-edit-email").val();

    console.log({name,username,email})
    query({
        type: 'update_user',
        params: [
            name,
            username,
            email,
            sessionStorage.userId
        ]
    }).then((data)=>{
        if (data.error) {
            throw(data.error);
        } else {
            window.history.back();
        }
    })
}

export const checkPasswordEditForm = () => {
    let password = $("#password-edit-password").val();
    let confirm = $("#password-edit-confirm").val();

    if (password !== confirm) {
        // tell user to try again
        return;
    }

    query({
        type: 'update_password',
        params: [
            password,
            sessionStorage.userId
        ]
    }).then((data)=>{
        if (data.error) {
            throw(data.error);
        } else {
            window.history.go(-1);
        }
    })
}

export const checkUserEditPhotoForm = () => {
    let img = $("#user-edit-photo-image").val();
    
    query({
        type: 'update_user_photo',
        params: [
            img,
            sessionStorage.userId
        ]
    }).then((data)=>{
        if (data.error) {
            throw(data.error);
        } else {
            window.history.go(-1);
        }
    })
}





export const checkHouseAddForm = () => {
    let name = $("#house-add-name").val();
    let type = $("#house-add-type").val();
    let floor = $("#house-add-floor").val();
    let description = $("#house-add-description").val();
    let lat = $("#location-lat").val();
    let lng = $("#location-lng").val();
    
    query({
        type: 'insert_animal',
        params: [
            sessionStorage.userId,
            name,
            type,
            floor,
            description,
            lat,
            lng
        ]
    }).then((data)=>{
        if (data.error) {
            throw(data.error);
        } else {
            $.mobile.navigate("#recent-page");
        }
    })
}

export const checkHouseEditForm = () => {
    let name = $("#house-edit-name").val();
    let type = $("#house-edit-type").val();
    let floor = $("#house-edit-floor").val();
    let description = $("#hosue-edit-description").val();

    console.log(description)

    query({
        type: 'update_animal',
        params: [
            name,
            type,
            floor,
            description,
            sessionStorage.House_Id
        ]
    }).then((data)=>{
        if (data.error) {
            throw(data.error);
        } else {
            console.log(data)
            window.history.back();
        }
    })

}



export const checkLocationAddForm = () => {
    // let house_id = $("#location-house-id").val();
    let lat = $("#location-lat").val();
    let lng = $("#location-lng").val();

    let back = +$("#location-back").val();

    query({
        type:"insert_animal",
        params:[lat,lng]
    }).then((data)=>{
        if (data.error) {
            throw(data.error);
        } else {
            $.mobile.navigate("#recent-page");
        }
    })
}

export const checkHouseDeleteForm = () => {
    query({
        type:"delete_animal",
        params:[sessionStorage.House_Id]
    }).then((data)=>{
        if (data.error) {
            throw(data.error);
        } else {
            window.history.go(-3);
            // $.mobile.navigate("#pin-page");

        }
    })
}

export const checkLocationDeleteForm = () => {
    query({
        type:"delete_location",
        params:[sessionStorage.House_Id]
    }).then((data)=>{
        if (data.error) {
            throw(data.error);
        } else {
            window.history.go(-3);
            // $.mobile.navigate("#pin-page");

        }
    })
}
