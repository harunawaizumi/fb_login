/**
 * Created by haruna on 9/8/17.
 */
import React, {Component, PropTypes} from 'react'
import WeeklyField from './WeeklyField'
import {Field, reduxForm} from 'redux-form'


class EditableActivityDetails extends Component {
    constructor(props) {
        super(props)

        const { initialValues : { name, auto_schedule }} = props  // 渡したい値を１ワードで表示できるように設定
        this.state = { name, auto_schedule } // 渡された値をstateの初期値として設定している
        this.handleSchedule = this.handleSchedule.bind(this)
    }

    handleSchedule(value) {
        return (
            this.setState({
                auto_schedule: value
            })
        )
    }




  render() {
      const { initialValues, handleSubmit, change } = this.props
      console.log('hello', this.props.initialValues)
      console.log('auto_schedule', this.state.auto_schedule)
      if (!initialValues) {
          return (
              <div>Loading...</div>
          )
      }
    return (
      <form onSubmit={handleSubmit(this.props.onSubmit)}>
          <Field
              name="name"
              component={(field) => {
                  return (
                      <input
                          {...field}
                          value={this.state.name}
                          type="text"
                          name="name"
                          onChange={e => {
                              e.preventDefault()
                              e.stopPropagation()
                              return (
                                  this.setState({ name: e.target.value})
                              )
                          }}
                      />
                      )
              }}
          />
          <Field
              name="auto_schedule"
              component={(field) => {
                  console.log('input2', field)
                  return (
                      <WeeklyField
                          value={field.input.value}
                          handleSchedule={this.handleSchedule}
                          onChange={change('auto_schedule', this.state.auto_schedule )}
                          {...field}
                      />
                  )
              }}
          />
          <button type="submit">Submit</button>
      </form>
    )
  }
}

//
// EditableActivityDetails.propTypes = {
//     // initialValues : PropTypes.shape({
//     //     name: PropTypes.string,
//     //     auto_schedule: PropTypes.object
//     // })
// }

export default reduxForm({
    form: 'EditableActivity'
})(EditableActivityDetails)

