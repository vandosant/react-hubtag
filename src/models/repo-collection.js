import Collection from 'ampersand-rest-collection'
import Repo from './repo'
import githubMixin from '../helpers/github-mixin'

export default Collection.extend(githubMixin, {
  url: 'http://api.github.com/user/repos',
  model: Repo
})