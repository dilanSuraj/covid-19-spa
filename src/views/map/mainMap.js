import React from 'react';
import OtherPageNavBarComponent from '../../_subcomponents/_otherpagenavbar';
import FooterComponent from '../../_subcomponents/_footer';
import { Card, Button } from 'semantic-ui-react';
import { Map, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import * as  districts from '../../util/data/district.json'
import * as  provinces from '../../util/data/provinces_c.json'
import * as  dsdivision from '../../util/data/dsdivision_c.json'
import * as  gndivision from '../../util/data/GNDivisions_C.json'

class MainMapScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lat: 6.9271,
      lng: 79.8612,
      zoom: 8,
      locationLevel: "PROVINCE",
      data: provinces.features
    }
  }
  
  setLocationLevel = (locationLevel_) => {
    this.setState({
      locationLevel: locationLevel_,
    })
    this.forceUpdate();
  }

  render() {
    let position = [this.state.lat, this.state.lng]
    let { locationLevel, data } = this.state;
    return (

      <React.Fragment>
         <OtherPageNavBarComponent />
        <div className="bg-img-other-pages" style={{ color: "black", paddingTop:"10%" }}>
          <div>

           
            <Card.Group itemsPerRow={2} style={{ justifyContent: "center",}}>
            <Card raised>
                <Button onClick={
                  (e) => {
                    e.preventDefault();
                    this.setLocationLevel("PROVINCE");
                  }
                }>Provinces</Button>
                <Button onClick={
                  (e) => {
                    e.preventDefault();
                    this.setLocationLevel("DISTRICT");
                  }

                }>District</Button>
                <Button onClick={
                  (e) => {
                    e.preventDefault();
                    this.setLocationLevel("DSDIVISION");
                  }
                }>District Divisions</Button>
                <Button onClick={
                  (e) => {
                    e.preventDefault();
                    this.setLocationLevel("GNDIVISION");
                  }
                }>Grama Niladhari Division</Button>
              </Card>
              <Card raised style={{ height: "70vh", width: "70vw" }}>
                <Map center={position} zoom={this.state.zoom} style={{ height: "70vh", width: "70vw" }}>
                  <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  {
                    (locationLevel === "PROVINCE")
                      ?
                      <GeoJSON data={provinces.features} key={0} onclick={(e) => {
                        console.log(e.layer.feature.properties.prov_n)
                      }} />
                      : (
                        (locationLevel === "DISTRICT")
                          ?                         
                          <GeoJSON data={districts.features} key={1} onclick={(e) => {
                            console.log(e.layer.feature.properties.NAME_1)
                          }} />
                          :
                          (
                            (locationLevel === "DSDIVISION")
                              ?
                              <GeoJSON data={dsdivision.features} key={2} onclick={(e) => {
                                console.log(e.layer.feature.properties.prov_n)
                              }} />
                              :
                              <GeoJSON data={gndivision.features} key={3} onclick={(e) => {
                                console.log(e.layer.feature.properties.gnd_n)
                              }} />
                          )

                      )

                  }
                </Map>
              </Card>
              
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