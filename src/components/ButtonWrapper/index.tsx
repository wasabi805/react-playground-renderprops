import React, { Component } from 'react'

export interface IProps{
    render?: (...args: any)=> void
}

class ButtonWrapper extends Component<IProps> {
  state = { count: 0 }

  incrementCount = () => {
    this.setState({
      ...this.state,
      count: this.state.count + 1
    })
  }

  render() {
    return <>{this.props?.render &&
      this.props?.render(this.state.count, this.incrementCount)}</>
  }
}

export default ButtonWrapper
