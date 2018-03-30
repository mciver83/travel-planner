import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { deleteLocation } from '../redux/reducers/locations'


class Location extends Component {
  render() {
    const { city, state, country, id } = this.props.location
    return (
      <div key={id}>
        <Link to={`/locations/${id}/categories`}><h3>{city}, {state} {country}</h3></Link>
        <button onClick={() => this.props.deleteLocation(id)}>delete</button>
      </div>
    )
  }
}


export default connect(null, { deleteLocation })(Location)