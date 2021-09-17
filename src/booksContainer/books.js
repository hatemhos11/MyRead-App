import React, { Component } from 'react'
import Shelves from './shelves'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

class Books extends Component {
  state ={
    mode: false
  }
  // Toggle Night Mode
  toggleMode =()=>{
    this.setState({mode: !this.state.mode})
    let doc = document.documentElement.style
    this.state.mode ? doc.setProperty('--mainBackColor', 'rgb(41, 41, 41)') : doc.setProperty('--mainBackColor', '#FFF')
    this.state.mode ? doc.setProperty('--mainTextColor', 'white') : doc.setProperty('--mainTextColor', 'black')
    localStorage.setItem('mode', this.state.mode)
  }

  render() {
    return (
      <div>
        <div className="list-books-content">
        <div className="list-books-title">
          <h1>MyReads</h1>
          <Link to='/search'>
            <div className="open-search">
              <button>
              </button>
            </div>
          </Link>
            <div onClick={this.toggleMode} className="toggle-mode">
              <button>
                <img src="https://img.icons8.com/ios-filled/50/000000/day-and-night.png" alt="toggle"/>
              </button>
            </div>
        </div>
          <Shelves books={this.props.books} updateBookPosition={this.props.updateBookPosition}/>
        </div>
      </div>
    )
  }
}
Books.propTypes = {
  books: PropTypes.array.isRequired,
  updateBookPosition: PropTypes.func.isRequired
}
export default Books
