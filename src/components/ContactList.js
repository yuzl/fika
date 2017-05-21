import React, { Component } from 'react'
import styled from 'styled-components';

import Face from './Face'

const StyledContactList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 30vh;
`;

StyledContactList.displayName = 'StyledContactList';

class ContactList extends Component {

  // Aktiver CONTACT mit entsprechenden Ausgaben
  setActiveContact = (contactId) => {
    this.props.expenses
      .fetchExpenses(this.props.user.id, contactId)
    this.props.changeContact(contactId)
  }

  render () {
    return (
      <StyledContactList>
        { this.props.contacts.map( (data, key) =>
            <Face
                key={key}
                setActiveContact={ this.setActiveContact }
                {...data}
            />
        )}
     </StyledContactList>
    )
  }
}

export default ContactList;
