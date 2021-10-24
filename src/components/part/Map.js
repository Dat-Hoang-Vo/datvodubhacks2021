import ReactMapGL, {Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;
import React, {useState} from 'react';


import MapPin from './MapPin';

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
    {
       "Resource_Type": "Housing",
       "Company_Name": "Roots",
       "Contact": "(206)632-1635",
       "Address:": "4541 19th Ave Ne Seattle, WA 98105",
       "Longitude":-122.3075758,
       "Latitude":47.6624223, 
       "link": "https://rootsinfo.org/needshelter",
    },
    {
       "Resource_Type": "Food",
       "Company_Name": "University District Food Bank",
       "Contact": "(206)523-7060",
       "Address:": "5017 Roosevelt Way NE, Seattle, WA 98105",
       "Longitude":-122.317622,
       "Latitude":47.665583, 
       "link": "https://www.udistrictfoodbank.org/",
    },
    {
       "Resource_Type": "Food",
       "Company_Name": "Rainier Valley Food Bank",
       "Contact": "(206) 723-4105",
       "Address:": "4205 Rainier Ave S, Seattle, WA 98118",
       "Longitude": -122.2888931,
       "Latitude": 47.5653309, 
       "link": "http://www.rvfb.org/",
    },
    {
       "Resource_Type": "Food",
       "Company_Name": "West Seattle Food Bank",
       "Contact": "(206) 932-9023",
       "Address:": "3419 SW Morgan St, Seattle, WA 98126",
       "Longitude": -122.375864,
       "Latitude": 47.5443163, 
       "link": "https://westseattlefoodbank.org/",
    },
    {
       "Resource_Type": "Food",
       "Company_Name": "Ballard Food Bank",
       "Contact": "(206)789-7800",
       "Address:": "1400 NW Leary Way, Seattle, WA 98107",
       "Longitude": -122.373998,
       "Latitude": 47.6639079, 
       "link": "https://www.ballardfoodbank.org/",
    },
    {
       "Resource_Type": "Food",
       "Company_Name": "Pike Market Food Bank",
       "Contact": "(206) 626-6462",
       "Address:": "1531 Western Ave P, Seattle, WA 98101",
       "Longitude": -122.34125,
       "Latitude": 47.608411, 
       "link": "https://www.pmsc-fb.org/food-bank",
    },
    {
       "Resource_Type": "Clothing",
       "Company_Name": "Goodwill",
       "Contact": "(206)860-5711",
       "Address:": "1400 S Lane St. Seattle, WA 98144",
       "Longitude": -122.314297,
       "Latitude": 47.5968817, 
       "link": "https://evergreengoodwill.org/locations/30-seattle?utm_source=gmb&utm_medium=yext",
    },
    {
       "Resource_Type": "Clothing",
       "Company_Name": "Goodwill",
       "Contact": "(206)957-5516",
       "Address:": "1756 6th Ave. S Seattle, WA 98134",
       "Longitude": -122.3258501,
       "Latitude": 47.5875925, 
       "link": "https://evergreengoodwill.org/locations/16?utm_source=gmb&utm_medium=yext",
    },
    {
       "Resource_Type": "Clothing",
       "Company_Name": "Goodwill",
       "Contact": "(206)812-6625",
       "Address:": "411 Westlake Ave. N Seattle, WA 98109",
       "Longitude": -122.33842468261719,
       "Latitude": 47.6226692199707, 
       "link": "https://evergreengoodwill.org/locations/72-south-lake-union?utm_source=gmb&utm_medium=yext",
    },
    {
       "Resource_Type": "Health",
       "Company_Name": "Country Doctor Community Health Center",
       "Contact": "(206)299-1600",
       "Address:": "500 19th Ave. East Seattle, WA 98112",
       "Longitude": -122.30698,
       "Latitude": 47.623424, 
       "link": "https://countrydoctor.org/",
    },
    {
       "Resource_Type": "Health",
       "Company_Name": "SeaMar",
       "Contact": "(855)289-5403",
       "Address:": "1040 S. Henderson St. Seattle, WA 98108",
       "Longitude": -122.35009765625,
       "Latitude": 47.522830963134766, 
       "link": "https://www.seamar.org/",
    },
    {
       "Resource_Type": "Health",
       "Company_Name": "International Community Health Services",
       "Contact": "(206)788-3500",
       "Address:": "3815 S Othello St Seattle, WA 98118",
       "Longitude": -122.38016510009766,
       "Latitude": 47.536865234375, 
       "link": "https://www.ichs.com/locations/holly-park-medical-and-dental-clinic",
    },
    {
       "Resource_Type": "Testing",
       "Company_Name": "UW Medicine ",
       "Contact": "N/A",
       "Address:": "3829 6th Ave S Seattle, WA 98108",
       "Longitude":-122.3269076,
       "Latitude": 47.569073, 
       "link": "https://www.solvhealth.com/book-online/0xvwjp",
    },
    {
       "Resource_Type": "Testing",
       "Company_Name": "UW Medicine ",
       "Contact": "(206)520-8700",
       "Address:": "Northwest Parking Garage, 1510 N 15th St Seattle, WA 98133",
       "Longitude": -122.3537,
       "Latitude": 47.478445, 
       "link": "https://www.uwmedicine.org/locations/covid-19-testing-northwest?utm_source=gmb&utm_medium=organic&utm_campaign=website_clicks",
    },
    {
       "Resource_Type": "Testing",
       "Company_Name": "UW Medicine ",
       "Contact": "(206)520-8701",
       "Address:": "Harborview Alley, 319 Terry Ave Seattle, WA 98104",
       "Longitude": -122.321687,
       "Latitude": 47.603874, 
       "link": "https://www.uwmedicine.org/locations/covid-19-testing-harborview?utm_source=gmb&utm_medium=organic&utm_campaign=website_clicks",
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
          mapStyle='mapbox://styles/bkieffer04/ckv50gwab4cuu14mxj940d1j2'
          onViewportChange={(viewport)=>{setViewport(viewport)}}>
          {data.map(information =>(
              
             <Marker
             latitude={information.Latitude}
             longitude={information.Longitude}>

             <MapPin resource_type={information.Resource_Type} company_name={information.Company_Name} adress={information['Address:']} company_phone={information.Contact} link={information.link} />

             </Marker>
          ))}
          </ReactMapGL>
        </div>
        )
 }

 export default Map;