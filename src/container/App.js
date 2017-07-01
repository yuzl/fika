import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import styled from 'styled-components'

import NewExpense from '../components/NewExpense'
import ContactList from '../components/ContactList'
import TotalExpenses from '../components/TotalExpenses'
import RegisterOrLogin from './RegisterOrLogin'

const StyledApp = styled.div`
  overflow: hidden
  min-height: 100vh;
`

const StyledLoading = styled.div`
  margin-top: 5em
  text-align: center
`

StyledApp.displayName = 'StyledApp'
StyledLoading.displayName = 'StyledLoading'

@inject(['user'], ['contacts'], ['expenses'], ['auth']) @observer
class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      top: 0,
      timeOfLastDragEvent: 0,
      touchStartY: 0,
      prevTouchY: 0,
      beingTouched: false,
      intervalId: null,
      showExpenses: false,
      userIsAuthenticated: false
    }

  }

  changeContact= (id) => {
    this.props.contacts
      .setactiveContact(id)
  }

  /***************************
   ******* HANDLE SWIPE DOWN *
   ***************************/

   _handleTouchStart(touchStartEvent) {
     this.handleStart(touchStartEvent.targetTouches[0].clientY)
   }

   _handleTouchMove(touchMoveEvent) {
     this.handleMove(touchMoveEvent.targetTouches[0].clientY)
   }

   _handleTouchEnd() {
     this.handleEnd()
   }

  handleStart(clientY) {
    if (this.state.intervalId !== null) {
      window.clearInterval(this.state.intervalId)
    }
    this.setState({
      timeOfLastDragEvent: Date.now(),
      touchStartY: clientY,
      beingTouched: true,
      intervalId: null
    })
  }

  handleMove(clientY) {
    if (this.state.beingTouched) {
      const touchY = clientY
      const currTime = Date.now()
      const elapsed = currTime - this.state.timeOfLastDragEvent
      const distance = 150

      // TODO: Schnellen Swipe erkennen
      const velocity = 20 * (touchY - this.state.prevTouchY) / elapsed
      console.log("speed of drag:", velocity)

      let deltaY = touchY - this.state.touchStartY
      if (deltaY > distance) {
        console.log("distance okay +:", deltaY)
        this.setState({ showExpenses : true })
      } else if (deltaY*-1 > distance) {
        console.log("distance okay -:", deltaY, distance*-1)
        this.setState({ showExpenses : false })
      } else if (deltaY > 0) {
        console.log("distance too short:", deltaY)
        deltaY = 0
      }
      this.setState({
        top: deltaY,
        timeOfLastDragEvent: currTime,
        prevTouchY: touchY
      })
    }
  }

  handleEnd() {
    this.setState({
      touchStartY: 0,
      beingTouched: false
    })
  }

  render() {

    // RegisterOrLogin abwarten
    if (!this.props.user.id) {
        return (
          <RegisterOrLogin
            authStore={ this.props.auth }
            user={ this.props.user }
            contacts={ this.props.contacts }
          />
        )
    } else if (!this.props.contacts.isLoaded) {
      // Render sobald Daten geladen wurden
      // TODO Loading Screen gestalten
      const { contacts } = this.props
      contacts.fetchContacts()

      return <StyledLoading> Loading Data… </StyledLoading>
    }

    return (
      <StyledApp
        onTouchStart={touchStartEvent => this._handleTouchStart(touchStartEvent)}
        onTouchMove={touchMoveEvent => this._handleTouchMove(touchMoveEvent)}
        onTouchEnd={() => this._handleTouchEnd()}>
        <TotalExpenses
            user={ this.props.user }
            totalExpenses={ this.props.expenses.total }
            contactName={ this.props.contacts.activeContact.name }
            contactColor={ this.props.contacts.activeContact.color }
            show={ this.state.showExpenses }
            />
        <ContactList
            changeContact={ this.changeContact }
            contacts={ this.props.contacts.json }
            user={ this.props.user }
            expenses={ this.props.expenses } />
        <NewExpense
            user={ this.props.user }
            activeContact={ this.props.contacts.activeContact }
            expenses={ this.props.expenses }
            show={ !this.state.showExpenses } />
      </StyledApp>
    )
  }
}

export default App
