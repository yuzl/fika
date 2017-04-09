import React, { Component } from 'react';

class NewContact extends Component {
  render () {
    return (
      <div className="newContact">
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


// Add New Contact Button clicked
addContact = (e) => {
  e.preventDefault();

  const name = this.refs.NewContact.refs.name.value;
  const email = this.refs.NewContact.refs.email.value;

  this.props.contacts.add({
    id: this.props.contacts.all.length + 1,
    name: name,
    email: email
  })
}

<NewContact ref="NewContact" addContact={this.addContact} />
