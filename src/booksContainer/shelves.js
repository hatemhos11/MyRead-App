import React from 'react'
import Book from './book'

const Shelves = (props) =>  {
  
return (
    <div>
  {/* ======================= Currently Reading  */}
      <div>
      <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
      
        <Book books={props.books.filter((book) => book.shelf === 'currentlyReading')} updateBookPosition={props.updateBookPosition} />
      
      </div>
      </div>
      </div>

  {/* ======================= want to read shelf  */}
      <div>
      <div className="bookshelf">
      <h2 className="bookshelf-title">Want To Read</h2>
      <div className="bookshelf-books">

        <Book books={props.books.filter((book) => book.shelf === 'wantToRead')} updateBookPosition={props.updateBookPosition} />
      
      </div>
      </div>
      </div>
      
  {/* ======================= Read Shelf */}
      <div>
      <div className="bookshelf">
      <h2 className="bookshelf-title">Read</h2>
      <div className="bookshelf-books">

        <Book books={props.books.filter((book) => book.shelf === 'read')} updateBookPosition={props.updateBookPosition} />
      
      </div>
      </div>
      </div>
    </div>
  )

}

export default Shelves
