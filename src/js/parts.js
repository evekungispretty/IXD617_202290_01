import { templater } from "./function.js";


export const makeHouseCard = templater(({id,name,type,date_create,img})=>`
<div class="big-card-container">
    <div class="close"><img src="./img/close.svg" alt=""></div>
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
</div>
`)


export const makeEmptyHouseCard = () => {`
    <div>
        <h1>You don't have any houses yet.</h1>
        <div class="button-6"><a href="#house-add-page">Start Here</a></div>
    </div>
`}


export const makeHouseList = templater(({id,name,type,date_create,img})=>`
<a class="pin-item animal-jump" href="#house-profile-page" data-house-id="${id}">
    <div class="content-container">
            <div class="content_img"><img src="${img}"></div>
            <div class="content_title">
                <h2>${name}</h2>
                <h3>${type}</h3>
            </div>
    </div>
</a>
`)

export const makeUserProfilePage = ({id,name,email,username,img})=>`
<div>
    <div class="profile">
        <a href="#user-edit-photo-page">
            <img src="${img}" alt="">
        </a>
        <h3>${name}</h3>
    </div>

    <form class="form" id="form-logout" data-ajax="false">
            <div class="form-control">
                <div class="user-profile-name">${name}</div>
                <div class="user-profile-username">@${username}</div>
                <div class="user-profile-email">${email}</div>
            </div>

</div>
`

export const makeUserHouse = templater(({id, img})=>`
<a href="#house-profile-page" data-user-house="${id}"">
     <img style="width:30vw;" src="${img}" alt="">
</a>

`)




export const makeEditUser = ({name,username,email}) => {
    
    return `
    <div class="form-control">
        <label class="form-label" for="user-edit-username">Username</label>
        <input class="form-input" type="text" id="user-edit-username" data-role="none" placeholder="Type your Username" value="${username}">
    </div>
    <div class="form-control">
        <label class="form-label" for="user-edit-name">Name</label>
        <input class="form-input" type="text" id="user-edit-name" data-role="none" placeholder="Type your Name" value="${name}">
    </div>
    <div class="form-control">
        <label class="form-label" for="user-edit-email">Email</label>
        <input class="form-input" type="text" id="user-edit-email" data-role="none" placeholder="Type your Email" value="${email}">
    </div>`
}


    
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
            <p>${description}</p>
        </div>
    </div>
        
    <div style=" color:var(--color-neutral-light); font-size:0.7em;">${date_create}</div>

    `
    })



export  const makeHouseProfileEdit = templater(({id,name,type,floor,img,description})=>{
    return `
    <div class="edit_img">
        <div class="edit_name">
            <label class="form-label" for="house-edit-name">Name</label>
            <input class="form-input" type="text" id="house-edit-name" data-role="none" value="${name}">     
        </div>
        <div class="two">
            <label class="form-label" for="house-edit-image">Replace Image</label>
            <input type="file" id="house-edit-image" data-role="none">     
        </div>
    </div>

    <div class="edit_type">
        <label class="form-label" for="house-edit-type">Type</label>
        <input class="form-input" type="text" id="house-edit-type" data-role="none" value="${type}">
    </div>

    <div class="edit_floor">
        <label class="form-label" for="house-edit-floor">Floor</label>
        <form>

        <input class="form-input" type="text" id="house-edit-floor" data-role="none" value="${floor}">
    </div>

    <div class="edit_text">
        <label class="form-label" for="house-edit-description">Description</label>
        <textarea type="textarea" class="form-input" id="hosue-edit-description" data-role="none">${description}</textarea>
    </div>

    <div class="delete">
        <a href="#delete-confirm-page" class="delete-btn"><img src="./img/icon_delete.svg"></a>
    
    </div>

    `
    })


    


// export  const makeHouseProfileEdit = templater(({id,type,floor,img,description})=>{
//     return `
//     <div class="edit_img">
//         <div class="one">
        
//             <img style="width:80vw;" src="${img}" alt="">
//         </div>
        
//         <div class="two">
//             <label class="form-label" for="house-edit-image">Replace Image</label>
//             <input type="file" id="house-edit-image" data-role="none">
//         </div>
//     </div>


//     <div class="edit_type">
//         <label class="form-label" for="house-edit-type">Type</label>
//         <input class="form-input" type="text" id="house-edit-type" data-role="none" value="${type}">
//     </div>

//     <div class="edit_floor">
//         <label class="form-label" for="house-edit-floor">Floor</label>
//         <form>

//         <input class="form-input" type="text" id="house-edit-floor" data-role="none" value="${floor}">
//     </div>

//     <div class="edit_text">
//         <label class="form-label" for="house-edit-description">Description</label>

//         <textarea class="form-input" id="hosue-edit-description">${description}</textarea>
//     </div>

//     `
//     })