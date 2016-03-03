import Model from 'ampersand-model'
import Repo from './repo'
import gitHubMixin from '../helpers/github-mixin'
import xhr from 'xhr'

export default Model.extend(gitHubMixin, {
  idAttribute: 'name',
  props: {
    name: 'string',
    color: 'string'
  },
  session: {
    editing: {
      type: 'boolean',
      default: false
    }
  },
  update(attrs) {
    const initialAttrs = this.attrs
    xhr({
      url: this.url(),
      json: attrs,
      method: 'PATCH',
      headers: {
        Authorization: 'token ' + app.me.token
      }
    }, (err, req, body) => {
      if (err) {
        this.set(initialAttrs)
        console.error('something went wrong')
      }
    })
    this.set(attrs)
  }
})