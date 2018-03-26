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
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" name="title" ref="title" placeholder="title of this book..."/>
          </label>

          <label>
            <input type="text" name="author" ref="author" placeholder="author of this book..."/>
          </label>

          <label>
            <textarea name="description" ref="description" placeholder="please add some description..."></textarea>
          </label>

          <input type="submit" value="Add Book" className="button expanded"/>
          <p className="error-message">{this.props.addFormError}</p>
        </form>
      </div>
    );
  }

}

export default AddBook;
