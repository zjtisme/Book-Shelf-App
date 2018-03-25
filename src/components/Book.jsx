import React, { Component } from 'react';

class Book extends Component {

  state = {
    onchange: false,
    updatedBook: {
      'title': this.props.title,
      'author': this.props.author,
      'description': this.props.description
    }
  }

  prepareModify = () => {
    this.setState({...this.state, onchange: true});
    this.refs.title.disabled = false;
    this.refs.author.disabled = false;
    this.refs.description.disabled = false;
  }

  resetAll = () => {
    const titleRef = this.refs.title;
    const authorRef = this.refs.author;
    const descriptionRef = this.refs.description;

    const originalBook = {
      'title': this.props.title,
      'author': this.props.author,
      'description': this.props.description
    }
    this.setState({...this.state, onchange: false, updatedBook: originalBook});
    titleRef.disabled = true;
    authorRef.disabled = true;
    descriptionRef.disabled = true;
  }

  doDeleteBook = () => {
    this.props.handleDeleteBook(this.props.id, this.props.index);
  }

  doUpdateBook = () => {
    const titleRef = this.refs.title;
    const authorRef = this.refs.author;
    const descriptionRef = this.refs.description;

    const bookId = this.props.id;
    const bookIndex = this.props.index;

    this.props.handleUpdateBook(bookId, bookIndex, this.state.updatedBook);
    this.setState({...this.state, onchange: false});
    titleRef.disabled = true;
    authorRef.disabled = true;
    descriptionRef.disabled = true;
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const curBook = this.state.updatedBook;
    curBook[name] = value;
    this.setState({...this.state, updatedBook: curBook});
  }

  render() {
    const renderButtons = () => {
      if(!this.state.onchange) {
        return <button className="success button" onClick={this.prepareModify}>Modify</button>;
      } else {
        return (
          <div>
            <button className="success button" onClick={this.doUpdateBook}>OK</button>
            <button className="primary button" onClick={this.resetAll}>Cancel</button>
          </div>
        );
      }
    };


    return (
      <div>
        <p>id: {this.props.id}</p>
        Title:<input name="title" ref="title" value={this.state.updatedBook.title} onChange={this.handleChange} disabled="disabled"/><br/>
      Author:<input name="author" ref="author" value={this.state.updatedBook.author} onChange={this.handleChange} disabled="disabled"/><br/>
    Description:<textarea name="description" ref="description" value={this.state.updatedBook.description} onChange={this.handleChange} disabled="disabled"></textarea>
    {renderButtons()}
        <button className="alert button" onClick={this.doDeleteBook}>Delete</button>
        <hr/>
      </div>
    );
  }
}

export default Book;
