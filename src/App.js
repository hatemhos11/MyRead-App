import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {BrowserRouter, Route} from "react-router-dom"
import Books from './booksContainer/books'
import Search from './search'

class App extends Component {
  state = {
    books: []
  }
  // Get My Books
  getAllBooks() {
    BooksAPI.getAll().then((data) => {
      this.setState({books: data})
    })
  }
  componentDidMount(){
    this.getAllBooks()
  }
  updateBookPosition = (book, shelf) => {
    BooksAPI.update(book, shelf).then( () => {
      this.getAllBooks();
		})
	}
  
  render() {
    return (
      <BrowserRouter>
          {/* Render Home Page */}
          <Route exact path='/'>
            <Books books={this.state.books} updateBookPosition={this.updateBookPosition}/>
          </Route>
          {/* Render Search Page */}
          <Route path='/search' >
            <Search books={this.state.books} updateBookPosition={this.updateBookPosition}/>
          </Route>
      </BrowserRouter>
    )
  }
}


export default App
