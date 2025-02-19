
const hex = () => chance.string({length:3, pool:'3456789AB'});
const num = () => chance.natural({min:350,max:600});
const getdate = (d1,d2) => dayjs(new Date(chance.natural({min:d1,max:d2}))).format('YYYY-MM-DD HH:mm:ss');

const animaltype = (type) => {
    let types = {
        'Queen Anne':['1','2','3', '4','5 or more'],
        'Gothic Revival':['1','2','3', '4','5 or more'],
        'Tudor Revival':['1','2','3', '4','5 or more'],
        'Mission Revival':['1','2','3', '4','5 or more'],
        'Rousseau Homes':['1','2','3', '4','5 or more']
    }
    return chance.pickone(types[type]);
}

const getUsers = () => (new Array(10)).fill(0).map((o,i)=>{
    o = {};
    o.id = i + 1;
    o.name = chance.name();
    o.username = 'user'+o.id;
    o.password = md5('pass');
    o.email = o.username+'@gmail.com';
    o.img = `https://via.placeholder.com/${num()}x${num()}/${hex()}/fff/?text=${o.name}`;
    o.date_create = getdate(Date.parse('2020/01/01'),Date.now());
    return o;
});

const getAnimals = () => (new Array(50)).fill(0).map((o,i)=>{
    o = {};
    o.id = i + 1;
    o.user_id = chance.natural({min:1, max:10});
    o.name = chance.first();
    o.type = chance.pickone(['Queen Anne','Gothic Revival','Tudor Revival', 'Mission Revival','Rousseau Homes']);
    o.floor = animaltype(o.type);
    o.description = chance.sentence();
    o.img = `https://via.placeholder.com/${num()}x${num()}/${hex()}/fff/?text=${o.type}`;
    o.date_create = getdate(Date.parse('2020/01/01'),Date.now());
    o.lat = chance.latitude({min:37.67, max:37.80});
    o.lng = chance.longitude({min:-122.50, max:-122.37});
    return o;
});

const getLocations = () => (new Array(250)).fill(0).map((o,i)=>{
    o = {};
    o.id = i + 1;
    // o.house_id = chance.natural({min:1, max:50});
    o.house_id = i + 1;
    o.lat = chance.latitude({min:37.67, max:37.80});
    o.lng = chance.longitude({min:-122.50, max:-122.37});
    o.description = chance.sentence();
    o.photo = `https://via.placeholder.com/${num()}x${num()}/${hex()}/fff/?text=PHOTO`;
    o.icon = `https://via.placeholder.com/${num()}x${num()}/${hex()}/fff/?text=ICON`;
    o.date_create = getdate(Date.parse('2020/01/01'),Date.now());
    return o;
});



const exportAsJSON = (type,data) => {
    document.querySelector('.output').innerHTML = `
<h2>${type}</h2>
<pre>
[
${data.map((o)=>`${JSON.stringify(o)}`).join(',\n')}
]
</pre>
`;
}

const exportAsSQL = (type,data) => {
    document.querySelector('.output').innerHTML = `
<h2>${type}</h2>
<pre>
INSERT INTO \`${type}\` (\`${Object.keys(data[0]).join('`, `')}\`) VALUES
${data.map((o)=>`(${JSON.stringify(Object.values(o)).slice(1,-1)})`).join(',\n')}
</pre>
`;
}

window.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('.users-json').addEventListener('click',()=>{ exportAsJSON('Users',getUsers()); });
    document.querySelector('.animals-json').addEventListener('click',()=>{ exportAsJSON('Animals',getAnimals()); });
    document.querySelector('.locations-json').addEventListener('click',()=>{ exportAsJSON('Locations',getLocations()); });
    document.querySelector('.users-sql').addEventListener('click',()=>{ exportAsSQL('track_house',getUsers()); });
    document.querySelector('.animals-sql').addEventListener('click',()=>{ exportAsSQL('track_house_item',getAnimals()); });
    document.querySelector('.locations-sql').addEventListener('click',()=>{ exportAsSQL('track_locations',getLocations()); });
});