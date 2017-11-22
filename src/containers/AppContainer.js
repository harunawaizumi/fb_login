import React, { Component } from 'react'
import WeeklyField from '../components/WeeklyField'
import {fetchActivities} from '../redux/activity/actions'
import {connect} from 'react-redux'
import EditableActivityDetails from '../components/EditableActivityDetails'
import {getToken} from '../redux/authentication/utils'

class AppContainer extends Component {
    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        this.props.fetchActivities(1)
    }

    onSubmit (values) {

    }

    render () {
        const { activities } = this.props
        if (!activities) {
            return <div>Loading ... </div>
        }

        return (
            <div style={{width: '80%', margin: 'auto', marginTop: '80px'}}>
                {
                    this.props.activities.map((activity, id) => {
                        console.log('act', activity)
                        return (
                            <EditableActivityDetails
                                key={id}
                                initialValues={activity}
                                onSubmit={this.onSubmit}
                                {...this.props}
                            />
                        )
                    })
                }

            </div>
        )
    }

}

function mapStateToProps ({ activityReducer }) {
    console.log('reducer', activityReducer)
    return {
        activities: Object.values(activityReducer.all),
    }
}

export default connect(mapStateToProps, { fetchActivities, getToken })( AppContainer )

