import mapboxgl from 'mapbox-gl';
import React, {useState} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';

const data = [
    {
       "Resource_Type": "Child Care",
       "Company_Name": "Child Care Resources",
       "Contact": "(206)329-1011",
       "Address:": "1225 S Weller St #300, Seattle, WA 98144",
       "Longitude":-122.3158648,
       "Latitude":47.5972858, 
       "link": "https://www.childcare.org/",
    },
    {
       "Resource_Type": "Child Care",
       "Company_Name": "Child Care Resources",
       "Contact": "(253)272-8000",
       "Address:": "1501 Pacific Ave #305, Tacoma, WA 98402",
       "Longitude":-122.437553,
       "Latitude":47.249176, 
       "link": "https://www.childcare.org/",
    },
    {
       "Resource_Type": "Child Care",
       "Company_Name": "Child Care Resources",
       "Contact": "(206)329-1011",
       "Address:": "841 Central Ave N, Kent, WA 98032",
       "Longitude":-122.2316648,
       "Latitude":47.3897278, 
       "link": "https://www.childcare.org/",
    },
    {
       "Resource_Type": "Child Care",
       "Company_Name": "Haggard Childcare Resources",
       "Contact": "(206)523-1391",
       "Address:": "9705 Sand Point Way NE, Seattle, WA 98115",
       "Longitude":-122.27459716796875,
       "Latitude":47.69406509399414, 
       "link": "https://www.haggardchildcare.com/",
    },
    {
       "Resource_Type": "Housing",
       "Company_Name": "Sacred Heart Shelter",
       "Contact": "(206)285-7489",
       "Address:": "232 Warren Ave North Seattle, WA 98109",
       "Longitude":-122.3545167,
       "Latitude":47.6205604, 
       "link": "https://ccsww.org/get-help/shelter-homeless-services/sacred-heart-shelter/",
    },
    {
       "Resource_Type": "Housing",
       "Company_Name": "Seattle's Union Gospel Mission",
       "Contact": "(206)622-5177",
       "Address:": "318 2nd Ave Extension South Seattle, WA 98104",
       "Longitude":-122.33049774169922,
       "Latitude":47.60009765625, 
       "link": "https://www.ugm.org/contact/#mens-shelter",
    },
    {
       "Resource_Type": "Housing",
       "Company_Name": "Hope Place",
       "Contact": "(206)628-2008",
       "Address:": "3802 South Othello Street Seattle, WA 98118",
       "Longitude":-122.2839215,
       "Latitude":47.5374228, 
       "link": "https://www.ugm.org/contact/#mens-shelter",
    },
    {
       "Resource_Type": "Housing",
       "Company_Name": "KentHope Day Center",
       "Contact": "(253)480-2325",
       "Address:": "9009 Canyon Dr Kent, WA 980302",
       "Longitude":-122.2201558,
       "Latitude":47.3821247, 
       "link": "https://www.ugm.org/contact/#mens-shelter",
    },
 ]

 const Map = () => {
    const[viewport, setViewport] = useState ({
        latitude: 47.6062,
        longitude: -122.3321,
        width: '100%',
        height: '100%',
        zoom: 12,
      })

      return (
        <div style={{height: '100%'}}>
          <ReactMapGL {...viewport}
          mapboxApiAccessToken='pk.eyJ1IjoiYmtpZWZmZXIwNCIsImEiOiJja3Y0cTFiMms4c2R5MnVvOHI1bWg3bHF6In0.iZP6sJS4NQX5h7KbiG3ebA' 
          onViewportChange={(viewport)=>{setViewport(viewport)}}>
          {data.map(information =>(
             <Marker
             latitude={information.Latitude}
             longitude={information.Longitude}>
             <button>
                 <p>{information.Company_Name}</p>
             </button>
             </Marker>
          ))}
          </ReactMapGL>
        </div>
        )
 }

 export default Map;