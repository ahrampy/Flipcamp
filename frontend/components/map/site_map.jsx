import React from 'react';

class SiteMap extends React.Component {
    constructor (props) {
        super(props)

    }

    componentDidMount() {

        const mapOptions = {
            center: { lat: this.props.lat, lng: this.props.lng },
            zoom: 10
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions);

        this.iconBase = 'https://maps.google.com/mapfiles/kml/shapes/'

        this.marker = new google.maps.Marker({
            position: { lat: this.props.lat, lng: this.props.lng },
            icon: {
                url: "http://maps.google.com/mapfiles/ms/icons/orange.png"
            }
        });

        this.marker.setMap(this.map);
    }

    render() {
        return (
            <div id='widget-map' ref={map => this.mapNode = map}>

            </div>
        )
    }

}

export default SiteMap;