import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({
  mixins: [ampersandMixin],
  render() {
    const {repo, labels} = this.props
    return (
      <div className='container'>
        <h1>{repo.full_name}</h1>
        <ul>
          {labels.map((label) => <li key={label.name}>{label.name}</li>
          )}
        </ul>
      </div>
    )
  }
})