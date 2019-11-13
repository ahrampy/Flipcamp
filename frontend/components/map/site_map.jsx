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
    }

    render() {
        return (
            <div id='widget-map' ref={map => this.mapNode = map}>

            </div>
        )
    }

}

export default SiteMap;