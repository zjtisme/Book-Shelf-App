import React, { Component } from 'react';
import BookList from './BookList';
import TopBar from './TopBar';
import AddBook from './AddBook';
import SearchBox from './SearchBox';
import axios from 'axios';

class HomePage extends Component {

  state = {
    bookList: [],
    searchText: '',
    addFormError: ''
  };

  async componentDidMount() {
    try {
      const response = await axios.get(`/books/books/userId/${this.props.userId}`);
      this.setState({...this.state, bookList: response.data});
    } catch(error) {
      console.log('Error retrieving ideas!')
      console.log(error)
    }
  }

  createBook = async (title, author, description) => {
    if(title.length === 0 || author.length === 0 || description.length === 0) {
      this.setState({...this.state, addFormError:'All fields are required...'});
      return;
    }
    const userId = this.props.userId;
    try {
      const newBook = {
        'title':title,
        'author':author,
        'description':description,
        'userId':userId
      }
      const response = await axios.post('/books/books', newBook);
      const newList = this.state.bookList;
      newList.push(response.data);
      this.setState({...this.state, bookList: newList, addFormError: ''});
    } catch (error) {
      console.log('Error creating new book!');
      console.log(error);
    }
  }

  deleteBook = async (bookId, bookIndex) => {
    if(window.confirm('Do you really want to delete this item?')) {
      try {
        const response = await axios.delete(`/books/books/${bookId}`);
        const newList = this.state.bookList;
        newList.splice(bookIndex, 1);
        this.setState({...this.state, bookList: newList});
      } catch(error) {
        console.log('Error deleting this book!');
        console.log(error);
      }
    }
  }

  updateBook = async (bookId, bookIndex, newBook) => {
    try {
      const updatedBook = {...newBook, 'userId': this.props.userId};
      const response = await axios.post(`/books/books/${bookId}`, updatedBook);
      const newList = this.state.bookList;
      newList[bookIndex] = response.data;
      this.setState({...this.state, bookList: newList});
    } catch(error) {
      console.log('Error updating this book...');
      console.log(error);
    }
  }

  setSearchText = (searchText) => {
    this.setState({...this.state, searchText});
  }

  render() {
    return (
      <div>
        <TopBar userName={this.props.userName} handleLogout={this.props.handleLogout}/>
        <h1 className="page-title">Book-shelf App</h1>
          <div className="row">
            <div className="columns small-centered small-10 medium-6 large-4">
              <SearchBox handleSearch={this.setSearchText}/>
              <BookList handleDeleteBook={this.deleteBook} handleUpdateBook={this.updateBook} bookList={this.state.bookList} searchText={this.state.searchText}/>
              <AddBook addFormError={this.state.addFormError} handleAddBook={this.createBook}/>
            </div>
          </div>
      </div>
    );
  }
}

export default HomePage;
