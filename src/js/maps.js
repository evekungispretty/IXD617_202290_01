import { checkData } from "./function.js";
import { makeHouseCard } from "./parts.js";



export const makeMap = async(target, center={lat:37.753110, lng:-122.399342}) => {
    await checkData(()=>window.google);

    let map_el = $(target);

    if (!map_el.data("map")) map_el.data({
        map: new google.maps.Map(map_el[0], {
            center,
            zoom: 12,
            disableDefaultUI: true,
            styles: mapstyles,
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
            $(".close").click(function () {
                $(".big-card-container").css("display", "none");
                map.setZoom(12);
              });

              $("#housecard").click(function () {
                setTimeout(()=>{$(".big-card-container").css("display", "none");
                map.setZoom(12);
            },4000)
                
                
              });
        
        });
        
        
        // marker.addListener("click", ()=>{makeHouseCard(location.id)});
    });

    map_el.data({markers});
}



const mapstyles =[
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "gamma": "1.42"
            },
            {
                "lightness": "11"
            },
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "lightness": -5
            },
            {
                "color": "#b0b0b0"
            },
            {
                "weight": 1.7
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ff0000"
            },
            {
                "lightness": "0"
            },
            {
                "saturation": "70"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffeef9"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "color": "#FFB3B3"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffb3b3"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#FFB3B3"
            },
            {
                "lightness": 66
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
]