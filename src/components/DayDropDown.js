import React, { Component } from 'react'
import MenuItem from 'material-ui/MenuItem'
import PropTypes from 'prop-types'
import {DropDownMenu} from 'material-ui'

const style = {
  marginTop: '-8px'
}


export default class DayDropDown extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 0
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event, index, value) {
    event.preventDefault();
    if (value) {
      this.setState({
        value
      })
      this.props.onChange(value)
    }
  }

  render () {
    return (
      <div style={style}>
        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={0} primaryText="Monday" default />
          <MenuItem value={1} primaryText="Tuesday" />
          <MenuItem value={2} primaryText="Wednesday" />
          <MenuItem value={3} primaryText="Thursday" />
          <MenuItem value={4} primaryText="Friday" />
          <MenuItem value={5} primaryText="Saturday" />
          <MenuItem value={6} primaryText="Sunday" />
        </DropDownMenu>
      </div>
    )
  }
}
DayDropDown.defaultValues = {
  days: []
}

DayDropDown.propTypes = {
  days: PropTypes.array.isRequired
}
