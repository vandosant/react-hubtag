import React from 'react';

var Hello = React.createClass({
  render() {
    return <div>Hello, {this.props.name}</div>
  }
});

React.render(<Hello name='scott' />, document.body);