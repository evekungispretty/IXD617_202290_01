import { templater } from "./function.js";



export const makeHouseList = templater(({id,name,type,date_create,img})=>`
<a class="pin-item animal-jump" href="#house-profile-page" data-house-id="${id}">
    <div class="content-container">
            <div class="content_img"><img src="${img}"></div>
            <div class="content_title">
                <h2>${name}</h2>
                <h3>${type}</h3>
                <div class="content_date">
                    <h3>${date_create}</h3>
                </div>
            </div>
    </div>
</a>
`)

export const makeUserProfilePage = ({name,email,username,img})=>`
<div>
    <div class="profile">
        <img src="${img}" alt="">
        <h3>${name}</h3>
    </div>
    
    <div class="flip"><span class="1" style="line-height: 45px;"> 
        <h2>Account Information <span style="font-size: 0.5em;">&#9660;</span></h2></span>
    </div>
    
    <div class="panel">
       
        <form class="form" id="form-logout" data-ajax="false">
            <div class="warning"></div>
            <div class="form-control">
                <div class="user-profile-name">${name}</div>
                <div class="user-profile-username">@${username}</div>
                <div class="user-profile-email">${email}</div>
            </div>
    <a href="#" class="js-logout">Log out</a>
</div>
`

    
export  const makeHouseProfile = templater(({id,type,floor,img,date_create,description})=>{
    return `
    <div class="item-img"><img src="${img}" alt=""></div>
    <div class="houese-profile-map"></div>
    <div class="type">${type}</div>
    <div class="floor">${floor}</div>
    <div class="house-profile-section section-description">${description}</div>
    <div>${date_create}</div>
    `
    })


export  const makeHouseProfileEdit = templater(({id,type,floor,img,description})=>{
    return `
    <div class="edit_img">
        <div class="one">
            <img style="width:80vw;" src="${img}" alt="">
        </div>
        
        <div class="two">
            <label class="form-label" for="pin-image">Replace Image</label>
            <input type="file" id="input-image" data-role="none">
        </div>
    </div>

    <div class="edit_type">
        <label class="form-label" for="pin-description">Type</label>
        <input type="text" id="input-type" data-role="none" value="${type}">
    </div>

    <div class="edit_floor">
        <label class="form-label" for="pin-description">Floor</label>
        <form>
        <select id = "houseFloor" onchange = "floor()" >
        <option> 1 </option>
        <option> 2 </option>
        <option> 3 </option>
        <option> 4 </option>
        <option> 5 or more </option>
        </select>
        <input type="text" id="input-type" data-role="none" value="${floor}">
    </div>

    <div class="edit_text">
        <label class="form-label" for="pin-description">Description</label>

        <textarea>${description}</textarea>
    </div>

    `
    })


    