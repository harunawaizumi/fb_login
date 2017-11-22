/**
 * Created by haruna on 7/17/17.
 */
import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import {MediaQuery} from 'react-responsive'

class UploadImage extends Component {
    constructor (props) {
        super(props)
        this.state = {
            hasError: false
        }
        this.onDrop = this.onDrop.bind(this)

    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true })
        console.log(error, info)
    }
    onDrop(values, error) {
        console.log('upload', values)
        this.props.actions.uploadPhoto(values)
        return <div />
    }




    render () {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }
        return (
            <MediaQuery query="(min-device-width: 1224px)">
                {(matches) => {
                    if (matches) {
                        return <div>Media query matches!</div>;
                    } else {
                        return <div>Media query does not match!</div>;
                    }
                }}
            </MediaQuery>
        )
    }
}

UploadImage.propTypes = {
}

const mapStateToProps = ({photoReducer}, ownProps) => {
    return ownProps
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: {
            uploadPhoto: (file) => console.log(file)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UploadImage)

