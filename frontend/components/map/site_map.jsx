import React from "react";

class SiteMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const mapOptions = {
      center: { lat: this.props.lat, lng: this.props.lng },
      zoom: 12
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);

    // this.iconBase = 'https://maps.google.com/mapfiles/kml/shapes/'

    // this.marker = new google.maps.Marker({
    //     position: { lat: this.props.lat, lng: this.props.lng },
    //     icon: {
    //         url: "http://maps.google.com/mapfiles/ms/icons/orange.png"
    //     }
    // });

    // this.marker.setMap(this.map);

    this.circle = new google.maps.Circle({
      strokeColor: "#F6C270",
      strokeOpacity: 0.8,
      strokeWeight: 2.5,
      fillColor: "#F6C270",
      fillOpacity: 0.4,
      map: this.map,
      center: { lat: this.props.lat, lng: this.props.lng },
      radius: 2000
    });
  }

  render() {
    return <div id="widget-map" ref={map => (this.mapNode = map)}></div>;
  }
}

export default SiteMap;
