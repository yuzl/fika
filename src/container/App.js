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
  user-select: none;
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
      touchStartX: 0,
      prevTouchY: 0,
      prevTouchX: 0,
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
     this.handleStart(touchStartEvent.targetTouches[0].clientY, touchStartEvent.targetTouches[0].clientX)
   }

   _handleTouchMove(touchMoveEvent) {
     this.handleMove(touchMoveEvent.targetTouches[0].clientY, touchMoveEvent.targetTouches[0].clientX)
   }

   _handleTouchEnd() {
     this.handleEnd()
   }

  handleStart(clientY, clientX) {
    if (this.state.intervalId !== null) {
      window.clearInterval(this.state.intervalId)
    }

    const currentPosition = Math.round(this.state.transformY);

    this.setState({
      timeOfLastDragEvent: Date.now(),
      touchStartY: clientY,
      touchStartX: clientX,
      beingTouched: true,
      intervalId: null,
      currentPosition: currentPosition,
      snapTransition: false
    })
  }

  handleMove(touchY, touchX) {
    if (this.state.beingTouched) {
      const deltaX = Math.abs(touchX - this.state.touchStartX)
      const deltaY = Math.abs(touchY - this.state.touchStartY)
      const detectSwipeThreshold = 20

      // Wait a given distance to detect the swipe direction
      if(deltaX + deltaY < detectSwipeThreshold ) return null;

      // IF you swipe more left or right than up or down
      if( (deltaX) > (deltaY) ) {
        console.log('SWIPE DIAGONAL');
        return null;
      }

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
        transformY: Math.round(distance+currentPosition)
      })
    }
  }

  handleEnd() {

    const distance = this.state.transformY - this.state.currentPosition
    const snapThreshold = 64
    let position = 0

    // swipe down
    if (distance > snapThreshold) {
      console.log("THRESHOLD SWIPE DOWN");

      position = 355

    // swipe up
  } else if (distance*-1 > snapThreshold) {
      console.log("THRESHOLD SWIPE UP");

      position = 0

    } else {
      position = this.state.currentPosition
    }


    this.setState({
      touchStartX: 0,
      touchStartY: 0,
      beingTouched: false,
      snapTransition: true,
      transformY: Math.round(position)
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
