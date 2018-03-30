import React, { Component } from 'react'
import { connect } from 'react-redux'

import { deleteLocation } from '../redux/reducers/locations'


class Location extends Component {
  render() {
    console.log(11111111111111, this.props)
    const { city, state, country, id } = this.props.location
    return (
      <div key={id}>
        <h3>{city}, {state} {country}</h3>
        <button onClick={() => this.props.deleteLocation(id)}>delete</button>
      </div>
    )
  }
}


export default connect(null, { deleteLocation })(Location)