import React, {Component} from 'react'
import {List} from 'material-ui/List/index'
import PropTypes from 'prop-types'
import DayTimeListItem from './DayTimeListItem'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'



export default class DayTimeList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weekly: this.props.weekly,
      time: null,
      day: null
    }
  }

  //update the state in response to prop changes
  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     weekly: nextProps.weekly
  //   })
  // }

  render() {
    return (
      <MuiThemeProvider>
        <div>
        <List>
            {Object.keys(this.state.weekly).map((item, id) => {
                return (
                    <div key={id}>
                        {
                            this.state.weekly[item].map((time, id) =>
                                <DayTimeListItem
                                    onDayTimeRemovedHandler={this.props.onDayTimeRemovedHandler}
                                    day={item}
                                    time={time}
                                    key={id}
                                />
                            )
                        }
                    </div>
                )
            })}
        </List>
        </div>
      </MuiThemeProvider>
    )
  }
}

DayTimeList.propTypes = {
  weekly: PropTypes.object.isRequired,
  onDayTimeRemovedHandler: PropTypes.func,
}
