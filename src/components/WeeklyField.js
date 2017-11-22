/**
 * Created by haruna on 7/17/17.
 */
import React, {Component } from 'react'
import AddWeekly from './AddWeekly'
import WeeklyList from './WeeklyList'

const undefinedIfEmpty = arr => (!arr || arr.length === 0) ? undefined : arr

const addDayTimeToWeekly = (weekly, dayTime) => Object.assign({}, weekly,
  { [dayTime.day]: (weekly[dayTime.day] || []).concat(dayTime.time) })

const removeDayTimeFromWeekly = (weekly, dayTime) => Object.assign({}, weekly,
  { [dayTime.day]: undefinedIfEmpty(weekly[dayTime.day].filter(item => item !== dayTime.time)) })

class WeeklyField extends Component {
  constructor (props) {
    super(props)
    const { value: { weekly = {} } } = props  // weekly = props.value.weekly
    this.state = { weekly }  // this.state = { weekly: props.value.weekly }
    this.onDayTimeAddedHandler = this.onDayTimeAddedHandler.bind(this)
    this.onDayTimeRemovedHandler = this.onDayTimeRemovedHandler.bind(this)
  }

  setWeekly(newWeekly) {
    const weekly = JSON.parse(JSON.stringify(newWeekly))
    this.setState({weekly}, () => {
      this.setState({
        weekly: this.state.weekly
      })
       this.props.handleSchedule(this.state)
    })
  }

  onDayTimeAddedHandler (dayTime) {
    this.setWeekly(addDayTimeToWeekly(this.state.weekly, dayTime))
  }

  onDayTimeRemovedHandler (dayTime) {
    this.setWeekly(removeDayTimeFromWeekly(this.state.weekly, dayTime))
  }

  render () {
    if (!this.state.weekly) {
      return <div>loading</div>
    } else {
      return (
        <div>
          <AddWeekly
            onDayTimeAddedHandler={this.onDayTimeAddedHandler}
          />
          <WeeklyList
            onDayTimeRemovedHandler={this.onDayTimeRemovedHandler}
            weekly={this.state.weekly}
          />
        </div>
      )
    }
  }
}

export default WeeklyField

