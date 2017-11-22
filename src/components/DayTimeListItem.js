import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {ListItem} from 'material-ui/List/index'

export default class DayTimeListItem extends Component {
  constructor (props) {
    super(props)
    this.onClickHandler = this.onClickHandler.bind(this)
  }

  onClickHandler () {
    const newItem = {
      day: this.props.day,
      time: this.props.time
    }
    this.props.onDayTimeRemovedHandler(newItem)
  }

  render () {
    const { time } = this.props
    const timeArray = time.split(":")
    const newTime = timeArray[0] + ':' + timeArray[1]
    return (
      <ListItem
        primaryText={this.props.day}
        secondaryText={newTime}
        onClick={this.onClickHandler}
      />
    )
  }
}

DayTimeListItem.propTypes = {
  day: PropTypes.string,
  time: PropTypes.string,
  onRemove: PropTypes.func
}
