/**
 * Created by haruna on 7/17/17.
 */
import React, { Component } from 'react'
import {RaisedButton, TimePicker} from 'material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DayDropDown from './DayDropDown'
import PropTypes from 'prop-types'

const days = [
  'mon',
  'tue',
  'wed',
  'thu',
  'fri',
  'sat',
  'sun'
]

export default class AddWeekly extends Component {
  constructor (props) {
    super(props)
    this.state = {
      day: days[0],
      time: null,
      value: null
    }
    this.onChangeDay = this.onChangeDay.bind(this)
    this.handleChangeTime = this.handleChangeTime.bind(this)
    this.submitDayTime = this.submitDayTime.bind(this)

  }

  onChangeDay (day) {
    this.setState({
      day: days[day]
    })
    console.log('day', this.state.day)
  }


  handleChangeTime (event, value) {
    const hours = value.getHours() < 10 ? '0'+value.getHours() : value.getHours();
    const minutes = value.getMinutes() < 10 ? '0'+value.getMinutes() : value.getMinutes();
    const seconds = value.getSeconds() < 10 ? '0'+value.getSeconds() : value.getSeconds();
    const timeValue = hours + ':' + minutes + ':' + seconds
    this.setState({time: timeValue})
    console.log('time', this.state.time)
  }


  submitDayTime () {
    const dayTime = {
      day: this.state.day,
      time: this.state.time
    }
    if (this.state.time && this.state.day) {

      this.props.onDayTimeAddedHandler(dayTime)
    }
  }

  render () {
    return (
      <MuiThemeProvider>
        <div>
            <DayDropDown
              name='day'
              onChange={this.onChangeDay}
              days={days} />
            <TimePicker
              name='time'
              hintText='10:00'
              value={this.state.value}
              onChange={this.handleChangeTime}
              fullWidth />
          <RaisedButton
            label='受付日時追加'
            onClick={this.submitDayTime}
          />
        </div>
      </MuiThemeProvider>
    )
  }
}

AddWeekly.propTypeType = {
  onDayTimeAdded: PropTypes.func,
  day: PropTypes.string,
  time: PropTypes.date
}

