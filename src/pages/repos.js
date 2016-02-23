import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({
  mixins: [ampersandMixin],
  render() {
    const {repos} = this.props
    return (
      <div><h1>Repos</h1>
        <ul>
          {repos.map((repo) => {
            return (
              <div>
                <li key={repo.id} className="octicon octicon-repo">
                  <a href={repo.appUrl}>{repo.full_name}</a>
                </li>
              </div>
            )
          }
          )}
        </ul>
      </div>
    )
  }
})