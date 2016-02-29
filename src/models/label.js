import Model from 'ampersand-model'
import Repo from './repo'

export default Model.extend({
  props: {
    name: 'string',
    color: 'string'
  },
  parent: Repo,
  session: {
    editing: {
      type: 'boolean',
      default: false
    }
  }
})