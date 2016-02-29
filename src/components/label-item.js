import React from 'react'

export default React.createClass({
  render() {
    const {label} = this.props
    return (
      <li key={label.name}>{label.name}</li>
    )
  }
})