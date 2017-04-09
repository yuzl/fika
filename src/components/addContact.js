import React, { Component } from 'react';

class NewContact extends Component {
  render () {
    return (
      <div>
          <form onSubmit={this.props.addContact}>
            <fieldset>
              <legend>New Contact</legend>
              <input ref='email' type="email" placeholder="hi@example.com"/>
              <input ref='name' type="text" placeholder="Contact Name"/>
              <button type="submit" className="button">Add</button>
            </fieldset>
          </form>
      </div>
    )
  }
}

export default NewContact;
