import React from 'react'
import localLinks from 'local-links'

class LocalLinks extends React.Component {
  constructor() {
    super()
    this.displayName = 'localLinks'
  }
  onClick (event) {
    const pathName = localLinks.getLocalPathname(event)
    if (pathName) {
      event.preventDefault()
      app.router.history.navigate(pathName)
    }
  }
  render() {
    return <div onClick={this.onClick} >{this.props.children}</div>
  }
}

export default LocalLinks