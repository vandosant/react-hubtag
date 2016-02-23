import React from 'react'

export default React.createClass({
  render() {
    const {repo} = this.props
    return (
      <div className='container'>
        <h1>{repo.full_name}</h1>
        <p>{repo.id}</p>
        <ul></ul>
      </div>
    )
  }
})