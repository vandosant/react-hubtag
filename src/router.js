import Router from 'ampersand-router'
import React from 'react'
import Public from './pages/public'
import Repos from './pages/repos'
import Layout from './layout'

export default Router.extend({
  renderPage(page, options = {layout: true}) {
    if (options.layout) {
      page = <Layout>{page}</Layout>
    }
    React.render(page, document.body)
  },
  routes: {
    '': 'public',
    'repos': 'repos'
  },
  public() {
    this.renderPage(<Public />, {layout: false})
  },
  repos() {
    this.renderPage(<Repos />)
  }
})