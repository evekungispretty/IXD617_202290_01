import { query } from "./function.js";
export const checkSigninForm = async () => {
    const userval = $("#signin-username").val();
    const passval = $("#signin-password").val();

    console.log(userval, passval)

    
    let founduser = await query({
        type: 'check_signin',
        params: [userval,passval]
    });


    if (founduser.result.length > 0) {
        // Logged In
        console.log("Success");
        sessionStorage.userId = founduser.result[0].id;

        $("#signin-form")[0].reset();
    } else {
        // Not Logged In
        console.log("Failure");
        sessionStorage.removeItem("userId");

        $(".warning").css("display", "block");
        setTimeout(()=>{$(".warning").css("display", "none");},3000)
        console.log("Failure");
    }

    checkUserId();
}


export const checkUserId = () => {
    
    const pages = ["#signin-page", "#signup-page", ""];

    if (sessionStorage.userId === undefined) {
        // not logged in
        if (!pages.some(p => p === window.location.hash)) {
            $.mobile.navigate("#signin-page");
        }
    } else {
        // logged in
        if (pages.some(p => p === window.location.hash)) {
            $.mobile.navigate("#onboarding1");
        }
    }
}