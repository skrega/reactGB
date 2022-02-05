import React from 'react'
import './style.sass'
export class Message extends React.Component {
  render() {
    const { text, author } = this.props

    return (
      <h3 className="title">
        {author}: {text}!
      </h3>
    )
  }
}
