import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './booksContainer/book'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'


class Search extends Component {
  state={
    searchValue: '',
    books: [],
    emptymsg: ''
  }
  
  searchAPIs = ()=>{
    BooksAPI.search(this.state.searchValue).then((newBooks) => {
      this.setState(newBooks.error ? {books: [], emptymsg: 'No Result'} :  {books: newBooks, emptymsg: ''} )
    })
  }

  onchangeValue = async (e)=>{
    await this.setState({searchValue: e.target.value})
    if(this.state.searchValue === ''){
      this.setState({books: [],emptymsg: ''})
    }else{
      this.searchAPIs()
    }
  }
  
  render(){
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/'>
            <button className="close-search"></button>
          </Link>
          <div className="search-books-input-wrapper">
            <input autoFocus onChange={this.onchangeValue} type="text" placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
        <div style={{fontSize:'30px',textAlign:'center',color:'#ddd'}} className='empty-msg'>{this.state.emptymsg}</div>
            
            <Book books={this.state.books} updateBookPosition={this.props.updateBookPosition}/>

        </div>
      </div>
    )
  }
}
Search.propTypes = {
  books: PropTypes.array.isRequired,
  updateBookPosition: PropTypes.func.isRequired

}
export default Search