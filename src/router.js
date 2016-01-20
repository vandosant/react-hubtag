import Router from 'ampersand-router'
import React from 'react'
import Public from './pages/public'
import Repos from './pages/repos'
import Layout from './layout'
import LocalLinks from './localLinks'

export default Router.extend({
  renderPage(page, options = {layout: true}) {
    if (options.layout) {
      page = <LocalLinks><Layout>{page}</Layout></LocalLinks>
    }
    React.render(page, document.body)
  },
  routes: {
    '': 'public',
    'repos': 'repos'
  },
  public() {
    this.renderPage(<LocalLinks><Public /></LocalLinks>, {layout: false})
  },
  repos() {
    this.renderPage(<Repos />)
  }
})