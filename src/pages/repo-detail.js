import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'
import LabelItem from '../components/label-item'

export default React.createClass({
  mixins: [ampersandMixin],
  render() {
    const {repo, labels} = this.props
    return (
      <div className='container'>
        <h1>{repo.full_name}</h1>
        <ul>
          {labels.map((label) => <LabelItem label={label} />
          )}
        </ul>
      </div>
    )
  }
})