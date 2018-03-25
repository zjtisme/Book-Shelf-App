import React, { Component } from 'react';
import Book from './Book';

class BookList extends Component {

  filterBooks = (bookList) => {
    if(this.props.searchText.length === 0) {
      return bookList;
    }
    const searchText = this.props.searchText;
    const res = bookList.filter((book) => {
      return book.title.toLowerCase().indexOf(searchText) !== -1;
    });

    return res;
  }

  render() {
    const finalBookList = this.filterBooks(this.props.bookList).map((book) => {
      const index = this.props.bookList.indexOf(book);
      return <Book {...book} handleDeleteBook={this.props.handleDeleteBook} handleUpdateBook={this.props.handleUpdateBook} index={index} key={book.id}/>;
    });

    return (
      <div>
        {finalBookList}
      </div>
    );
  }
}

export default BookList;
