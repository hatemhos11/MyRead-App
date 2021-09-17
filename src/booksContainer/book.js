import React from 'react'
import defaultImg from '../Images/defaultImage.png'

const Book = (props)=> {
  const bookMap = props.books.map((book)=>{
    return(
      <div key={Math.random()}>
        <li>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : defaultImg})`,backgroundSize:'cover' }}></div>
              <div className="book-shelf-changer">
                <select value={book.shelf}  onChange={(e) => props.updateBookPosition(book, e.target.value)}  >
                  <option style={{background:'#ddd',color:'black',fontWeight:'bold', textAlign:'center'}} value="move" disabled>Move To</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none" >None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
            <div className='rank-book'>{book.averageRating ? `Rating:${book.averageRating}/10` : 'Unknown'}</div>
          </div>
        </li>
      </div>
    )
  })
  return (
    <ol className="books-grid">
      {bookMap}
    </ol>
  )
}

export default Book
