import React, { useEffect, useState } from 'react';
import OtherPageNavBarComponent from '../../_subcomponents/_otherpagenavbar';
import FooterComponent from '../../_subcomponents/_footer';
import { Card } from 'semantic-ui-react';
import * as  districts from '../../util/data/district.json'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow, Polygon } from 'react-google-maps'
import mapStyle from '../../styles/mapStyle';

const loading = () => {
	return (<div className="animated fadeIn pt-3 center text-center">...Loading</div>)
}

const  getData = async () =>{
    let locationList = []
    await districts.features.map(async (district) => {
      let district_ = [];
      console.log(district.geometry.coordinates[0].lastIndexOf)
      await district.geometry.coordinates[0][0].map((cordinate) => {
        let pointer = {
          lat: cordinate[1],
          lng: cordinate[0],
        }
        district_.push(pointer)
      })
      locationList.push({
          name: district.properties.NAME_1,
          coordinates:district_
      })
    })
    console.log("LOCATION "+JSON.stringify(locationList))
    return locationList;
}
function Map() {

    const [locations, setLocations] = useState([])
    const [isLoaded, setLoadedStatus] = useState(false);
  
    useEffect(() => {
      convertData();
    }, [locations.length])
  
    async function convertData() {
      let locationList = await getData();
      setLocations(locationList);
      console.log(locations.length)
      setLoadedStatus(true)
    }
    
    if (locations.length > 0) {
        return (
            <GoogleMap
              defaultZoom={7}
              defaultCenter={{
                lat: 6.927079,
                lng: 79.861244
              }}
              defaultOptions={{
                styles: mapStyle
              }}
            >
              {               
                locations.map((location, key) => {
                  if(location.name === "Colombo" || location.name === "Ratnapura"){
                      console.log(JSON.stringify(location))
                  }
                  return (<Polygon
                    key={key}
                    paths={location.coordinates}
                    onClick={() => {
                      console.log("SERIOUSLY "+location.name)
                      window.alert("Hi!");
                    }}
                  />)
                })
              }
            </GoogleMap>
          )
    }
    else{
        console.log("ELSE "+locations.length)
        return loading()
    }
    
  }
  
const WrappedMap = withScriptjs(withGoogleMap(Map));

class MainMapScreen extends React.Component {

    render() {

        return (

            <React.Fragment>
                <div className="bg-img-other-pages" style={{ backgroundImage: "url('./img/surveybgimg.jpeg')", color: "white" }}>
                    <div>

                        <OtherPageNavBarComponent />
                        {/* <Card.Group itemsPerRow={1}> */}
                        <Card.Group>
                            <Card raised style={{ height: "70vh", width: "70vw" }}>
                                <WrappedMap
                                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
                                    loadingElement={<div style={{ height: "100%" }} />}
                                    containerElement={<div style={{ height: "100%" }} />}
                                    mapElement={<div style={{ height: "100%" }} />}
                                />
                            </Card>
                            <Card raised></Card>
                        </Card.Group>
                    </div>
                </div>
                <footer>
                    <FooterComponent />
                </footer>
            </React.Fragment>
        );
    }

}

export default MainMapScreen;