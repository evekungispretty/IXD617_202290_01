import { query } from "./function.js"
import { makeMap, makeMarkers } from "./maps.js"
import { makeHouseList, makeUserProfilePage, makeHouseProfile, makeHouseProfileEdit, makeUserHouse  } from "./parts.js"; 


export const RecentPage = async() => {
        
    let {result:house_locations} = await query({
        type:"recent_animal_locations",
        params:[sessionStorage.userId]
    });
    console.log(house_locations);


    let valid_animals = house_locations.reduce((r,o)=>{
        o.icon = o.img;
        if (o.lat && o.lng) r.push(o);
        return r;
    },[])

    let map_el = await makeMap("#recent-page .map");
    makeMarkers(map_el, house_locations);



    // let {result:houseinfo} = await query({
    //     type:"animal_by_id",
    //     params:[sessionStorage.House_Id]
    // });

    // console.log(houseinfo)

    // $("#recent-page .card_small").html(makeHouseCard(houseinfo));

    

}

export const PinPage = async() => {

    let {result:animals} = await query({
        type:"animals_by_user_id",
        params:[sessionStorage.userId]
    });


    console.log(animals)

    $("#pin-page .houselist").html(makeHouseList(animals))
}

export const UserPage = async() => {
    let {result:users} = await query({
        type:"user_by_id",
        params:[sessionStorage.userId]
    });
    let [user] = users;

    console.log(user)

    $("#user-profile-page .profilepage").html(makeUserProfilePage(user))

    $(function(){
        $(".flip").click(function(){
            $(".panel").slideToggle("slow");
            $(".xs1").toggle();
            $(".xs2").toggle();
          });});
          
       
          

    let {result:user_house} = await query({
    type:"animals_by_user_id",
    params:[sessionStorage.userId]
    });

    console.log(sessionStorage.userId)


    $("#user-profile-page .user-house").html(makeUserHouse(user_house))

}


export const HousePage = async() => {
    let {result:house} = await query({
        type:"animal_by_id",
        params:[sessionStorage.House_Id]
    });

    console.log(house)

    

    $("#house-profile-page .house-profile").html(makeHouseProfile(house));

    let {result:locations} = await query({
        type:"locations_by_animal_id",
        params:[sessionStorage.House_Id]
    });
    console.log(locations)

    let map_el = await makeMap("#house-profile-page .profile_map");
    makeMarkers(map_el,locations);

}



export const HouseEditPage = async() => {
    let {result:houseedit} = await query({
        type:"animal_by_id",
        params:[sessionStorage.House_Id]
    });

    console.log(houseedit)

    $("#edit-page .house-edit").html(makeHouseProfileEdit(houseedit));

}