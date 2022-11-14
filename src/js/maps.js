import { checkData } from "./function.js";
import { makeHouseCard } from "./parts.js";


// function openHousecard(id){//手动nav
//     sessionStorage.House_Id = id;
//     var tar = window.location.hash//获取当前页面
// }

export const makeMap = async(target, center={lat:37.753110, lng:-122.399342}) => {
    await checkData(()=>window.google);

    let map_el = $(target);

    if (!map_el.data("map")) map_el.data({
        map: new google.maps.Map(map_el[0], {
            center,
            zoom: 12,
            disableDefaultUI: true,
        })
    });

    return map_el;
}


export const makeMarkers = (map_el,marker_locs=[]) => {
    let {map,markers} = map_el.data();

    if (markers) markers.forEach((marker) => marker.setMap(null));

    markers = [];

    marker_locs.forEach((location)=>{
        let marker = new google.maps.Marker({
            position: location,
            map,
            icon: {
                url:'./img/logo.svg',
                scaledSize: {
                    width:40,
                    height:40,
                    
                }
            }
        });
        markers.push(marker);
        marker.addListener("click", ()=>{ 
            map.setZoom(16);
            map.setCenter(marker.getPosition());
            $("#recent-page .card_small").html(makeHouseCard(location));
        });
        
        
        // marker.addListener("click", ()=>{makeHouseCard(location.id)});
    });

    map_el.data({markers});
}