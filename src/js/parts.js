import { templater } from "./function.js";


export const makeHouseCard = templater(({id,name,type,date_create,img})=>`
<a href="#house-profile-page" style="width: 90vw;" data-house-card="${id}">
    <div id="housecard" class="card-container">
            <div class="card_img"><img style=" width: 100px; height: 100px; object-fit: cover;" src="${img}"></div>
            <div class="card_title">
                <h2>${name}</h2>
                <h3>${type}</h3>
                <div class="card_date">
                    <h3>${date_create}</h3>
                </div>
            </div>
    </div>
</a>
`)


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

export const makeUserProfilePage = ({id,name,email,username,img})=>`
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

export const makeUserHouse = templater(({id, img})=>`
<a href="#house-profile-page" data-user-house="${id}"">
     <img style="width:30vw;" src="${img}" alt="">
</a>

`)

    
export  const makeHouseProfile = templater(({id,type,floor,img,date_create,description})=>{
    return `
    <div class="item-img"><img src="${img}" alt=""></div>
    <div class="container-item">
        <div class="container-profile">
            <div><img src="./img/icon_type.svg" alt=""></div>
            <div class="type">
                <h2>House Type</h2>
                ${type}
            </div>
        </div>

        <div class="container-profile">
            <div><img src="./img/icon_floor.svg" alt=""></div>
            <div class="floor">
                <h2>Floor</h2>
                ${floor}
            </div>
        </div>
        
    </div>

    <div class="divider"></div>
   
    
    <div class="container-description">
        <div>
            <h2>Description</h2>
            ${description}
        </div>
    </div>
        
    <div style=" color:var(--color-neutral-light); font-size:0.7em;">${date_create}</div>

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


    