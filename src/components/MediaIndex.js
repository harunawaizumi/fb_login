/**
 * Created by haruna on 7/17/17.
 */
import React, { Component } from 'react'
import {Style} from './styles'
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back'
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward'
const photos =  [
    'https://thumbs.dreamstime.com/z/chocolate-candy-golden-wrapper-close-up-34215851.jpg',
    'https://thumb1.shutterstock.com/display_pic_with_logo/1270564/304759220/stock-photo-chocolate-candy-in-golden-wrapper-isolated-on-white-304759220.jpg',
    'https://cdn.shopify.com/s/files/1/0209/1522/products/t-shirts-golden-wrapper-t-shirt-1_1024x1024.jpg?v=1502408391',
    'https://c1.staticflickr.com/5/4088/5171357356_401dc020a4_b.jpg',
]




export default class MediaIndex extends Component {
    constructor (props) {
        super(props)
        this.state = {
            slideCount: 0
        }
        this.nextSlide = this.nextSlide.bind(this)
        this.previousSlide = this.previousSlide.bind(this)

    }



    nextSlide() {
        if (this.state.slideCount === photos.length - 1) {
            this.setState({
                slideCount: 0
            })
        } else {
            this.setState({
                slideCount: this.state.slideCount + 1
            })
        }
    }

    previousSlide() {
        if (this.state.slideCount === 0) {
            this.setState({
                slideCount: photos.length - 1
            })
        } else {
            this.setState({
                slideCount: this.state.slideCount -1
            })
        }
    }


    render () {
        return (
            <div>
                <div>
                    <div>hello</div>
                    <ArrowBack onClick={this.previousSlide} style={Style.imageArrow} />
                    <ArrowForward onClick={this.nextSlide} style={Style.imageArrow} />
                </div>
            </div>
        )
    }
}



