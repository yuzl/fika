import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import styled from 'styled-components'

import NewExpense from '../components/NewExpense'
import ContactList from '../components/ContactList'
import TotalExpenses from '../components/TotalExpenses'
import RegisterOrLogin from './RegisterOrLogin'

import GLOBALS from '../globals.js'

const snapAnimationChooser = (snapTransition) => {
  return snapTransition? "all" : "none"
}

const StyledApp = styled.div`
  position: relative;
  height: 100vh;
  transition-timing-function:${GLOBALS['T_EASING']};
  transition-duration: ${GLOBALS['T_SHORT']};
  transition-property: ${props => snapAnimationChooser(props.snapTransition)};
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
      snapTransition: false,
      timeOfLastDragEvent: 0,
      touchStartY: 0,
      prevTouchY: 0,
      transformY: 0,
      currentPosition: 0,
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

    const currentPosition = this.state.transformY;

    this.setState({
      timeOfLastDragEvent: Date.now(),
      touchStartY: clientY,
      beingTouched: true,
      intervalId: null,
      currentPosition: currentPosition,
      snapTransition: false
    })
  }

  handleMove(touchY) {
    if (this.state.beingTouched) {
      const currTime = Date.now()
      const currentPosition = this.state.currentPosition

      // TODO: Schnellen Swipe erkennen
      //const elapsed = currTime - this.state.timeOfLastDragEvent
      //const velocity = 20 * (touchY - this.state.prevTouchY) / elapsed
      //console.log("speed of drag:", velocity)

      let distance = touchY - this.state.touchStartY

      this.setState({
        timeOfLastDragEvent: currTime,
        prevTouchY: touchY,
        transformY: distance+currentPosition
      })
    }
  }

  handleEnd() {

    const distance = this.state.transformY - this.state.currentPosition
    const threshold = 64
    let position = 0

    // swipe down
    if (distance > threshold) {
      //console.log("threshold okay +:", distance)
      console.log("THRESHOLD SWIPE DOWN");

      position = 355

    // swipe up
  } else if (distance*-1 > threshold) {
      //console.log("threshold okay -:", distance*-1, threshold)
      console.log("THRESHOLD SWIPE UP");

      position = 0

    } else {
      position = this.state.currentPosition
    }


    this.setState({
      touchStartY: 0,
      beingTouched: false,
      snapTransition: true,
      transformY: position
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
        onTouchEnd={() => this._handleTouchEnd() }
        snapTransition={ this.state.snapTransition }
        >
        <TotalExpenses
            user={ this.props.user }
            totalExpenses={ this.props.expenses.total }
            contactName={ this.props.contacts.activeContact.name }
            contactColor={ this.props.contacts.activeContact.color }
            show={ this.state.showExpenses }
            transformY={this.state.transformY}
            />
        <ContactList
            changeContact={ this.changeContact }
            contacts={ this.props.contacts.json }
            user={ this.props.user }
            expenses={ this.props.expenses }
            transformY={this.state.transformY}
            />
        <NewExpense
            user={ this.props.user }
            activeContact={ this.props.contacts.activeContact }
            expenses={ this.props.expenses }
            show={ !this.state.showExpenses }
            transformY={this.state.transformY}
            />
      </StyledApp>
    )
  }
}

export default App
