import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getCategories, createCategory } from '../redux/reducers/categories'
import { getUserInfo } from '../redux/reducers/user'
import { Link } from 'react-router-dom'

import axios from 'axios'

class Categories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addCategory: false,
      name: null,
      categories: []
    }
  }

  componentWillMount() {
    let { location_id } = this.props.match.params
    this.props.getCategories(location_id)
    this.props.getUserInfo()
  }

  componentWillReceiveProps(props) {
    let { data: categories } = props.categories
    this.setState({categories})
    if (categories.length > 0) {
      axios.post(`/yelp`, { location: props.currentLocation, categories: props.categories.data }).then(response => {
        this.setState({categories: response.data})
      })
    }
  }

  toggleAddCategory = () => {
    let newState = { ...this.state, addCategory: !this.state.addCategory }
    this.setState(newState)
  }

  handleNameInput = (event) => {
    let name = event.target.value
    this.setState({ name })
  }

  createCategory = () => {
    let { location_id } = this.props.match.params
    let { name } = this.state
    this.props.createCategory({ name }, location_id)
  }

  render() {
    return (
      this.props.user.id ?
        <div>
          <h1>Categories</h1>
          <div>
            {this.state.categories.map(category => {
              const { name, id, yelp } = category
              return (
                <div key={id}>
                  <button onClick={() => {
                    console.log(111111, category)
                    category.showYelp = !category.showYelp
                    this.setState({ ...this.state })
                  }}><h3>{name}</h3></button>
                  <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    {category.showYelp && yelp && yelp.map(item => {
                      return (
                        <div key={item.id} style={{width: 200, margin: 10, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                          <p>{item.name}</p>
                          <div style={{
                            backgroundImage: `url(${item.image_url})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover', 
                            backgroundRepeat: 'no-repeat',
                            width: 200, 
                            height: 200}}/>
                        </div>


                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
          <div onClick={this.toggleAddCategory}> + </div>
          {this.state.addCategory && <div>
            <input onChange={this.handleNameInput} placeholder="name" />
            <button onClick={this.createCategory}> save </button>
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
  let { user, categories, locations } = state
  return { user, categories, currentLocation: locations.currentLocation }
}

export default connect(mapStateToProps, { getCategories, createCategory, getUserInfo })(Categories)