import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getCategories, createCategory } from '../redux/reducers/categories'
import { Link } from 'react-router-dom'

class Categories extends Component {
  constructor() {
    super()
    this.state = {
      addCategory: false,
      name: null,
    }
  }

  componentWillMount() {
    let { location_id } = this.props.match.params
    this.props.getCategories(location_id)
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
            {this.props.categories.data.map(category => {
              const { name, id } = category
              return (
                <div key={id}>
                  <Link to={`/locations/${id}/categories`}><h3>{name}</h3></Link>
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
  let { user, categories } = state
  return { user, categories }
}

export default connect(mapStateToProps, {getCategories, createCategory})(Categories)