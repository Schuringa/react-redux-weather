import React, { Component } from 'react'
import PropTypes from 'prop-types'

class GoogleMap extends Component {
  componentDidMount () {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }

  render () {
    return <div ref='map' />
  }
}

GoogleMap.propTypes = {
  lat: PropTypes.number,
  lon: PropTypes.number
}

export default GoogleMap
