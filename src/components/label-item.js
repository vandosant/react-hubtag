import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({
  mixins: [ampersandMixin],
  getInitialState() {
    const {name, color} = this.props.label
    return {name, color}
  },
  onNameChange(e) {
    this.setState({name: e.target.value})
  },
  onColorChange(e) {
    this.setState({color: e.target.value})
  },
  render() {
    const {label} = this.props
    const cssColor = '#' + label.color
    let content
    if (label.editing) {
      content = <form className='label'>
        <span className='label-color avatar avatar-small avatar-rounded'>&nbsp;</span>
        <input name='name' value={this.state.name} onChange={this.onNameChange} />
        <input name='color'value={this.state.color} onChange={this.onColorChange} />
        <button type='submit' className='button button-small'>Save</button>
        <button type='button' className='button button-small button-unstyled'
                onClick={(e) => {e.preventDefault(); label.editing = false}}>cancel
        </button>
      </form>
    } else {
      content = <div className='label'>
        <span className='label-color' style={{backgroundColor: cssColor}}>&nbsp;</span>
        <span>{label.name}</span>
        <span className='octicon octicon-pencil' onClick={(e) => {e.preventDefault(); label.editing = true}}></span>
        <span className='octicon octicon-x' onClick={(e) => {e.preventDefault(); label.destroy()}}></span>
      </div>
    }
    return (
      <div>
        {content}
      </div>
    )
  }
})