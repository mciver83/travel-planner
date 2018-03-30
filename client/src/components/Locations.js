import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getUserInfo } from '../redux/reducers/user'
import { getLocations, createLocation } from '../redux/reducers/locations'
import { Link } from 'react-router-dom'

import Location from './Location'

class Locations extends Component {
  constructor() {
    super()
    this.state = {
      addLocation: false,
      city: null,
      state: null,
      country: null
    }
  }

  componentWillMount() {
    this.props.getUserInfo()
    this.props.getLocations()
  }

  toggleAddLocation = () => {
    let newState = { ...this.state, addLocation: !this.state.addLocation }
    this.setState(newState)
  }

  handleCityInput = (event) => {
    let city = event.target.value
    this.setState({ city })
  }

  handleStateInput = (event) => {
    let state = event.target.value
    this.setState({ state })
  }

  handleCountryInput = (event) => {
    let country = event.target.value
    this.setState({ country })
  }

  createLocation = () => {
    let { city, state, country } = this.state
    this.props.createLocation({ city, state, country })
  }

  render() {
    return (
      this.props.user.id ?
        <div>
          <h1>Locations</h1>
          <div>
            {this.props.locations.data.map(location => {
              return <Location location={location} />
            })}
          </div>
          <div onClick={this.toggleAddLocation}> + </div>
          {this.state.addLocation && <div>
            <input onChange={this.handleCityInput} placeholder="city" />
            <input onChange={this.handleStateInput} placeholder="state" />
            <input onChange={this.handleCountryInput} placeholder="country" />
            <button onClick={this.createLocation}> save </button>
          </div>}
        </div>
      : 
        <div>
          <Link to="/"><button> go to login page</button></Link>
        </div>
    )
  }
}

function mapStateToProps(state) {
  const { user, locations } = state;
  return { user, locations }
}

export default connect(mapStateToProps, { getLocations, getUserInfo, createLocation })(Locations)