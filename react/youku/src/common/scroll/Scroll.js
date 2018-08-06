import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import BScroll from 'better-scroll'
import './scroll.styl'

class Scroll extends Component {
  componentWillUnmount () {
    this.bScroll.off('scroll')
    this.bScroll = null
  }
  componentDidMount () {
    this.scrollView = ReactDOM.findDOMNode(this.refs.scrollView)
    if (!this.bScroll) {
      this.bScroll = new BScroll(this.scrollView, {
        probeType: 3,
        click: this.props.click
      })
      if (this.props.onScroll) {
        this.bScroll.on('scroll', (scroll) => {
          this.props.onScroll(scroll)
        })
      }
    }
  }
}