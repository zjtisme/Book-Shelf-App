import React, { Component } from 'react';

class AddBook extends Component {

  handleSubmit = (e) => {
    e.preventDefault();

    const title = this.refs.title.value;
    const author = this.refs.author.value;
    const description = this.refs.description.value;

    this.props.handleAddBook(title, author, description);
    this.refs.title.value = '';
    this.refs.author.value = '';
    this.refs.description.value = '';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="title" ref="title" placeholder="title of this book..."/><br/>
          <input name="author" ref="author" placeholder="author of this book..."/><br/>
          <textarea name="description" ref="description" placeholder="please add some description..."></textarea>
          <input type="submit" value="Add Book" className="button"/>
          <p>{this.props.addFormError}</p>
        </form>
      </div>
    );
  }

}

export default AddBook;
