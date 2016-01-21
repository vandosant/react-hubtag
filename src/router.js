import Router from 'ampersand-router'
import React from 'react'
import Public from './pages/public'
import Repos from './pages/repos'
import Layout from './layout'
import LinkHelper from './components/link-helper'

export default Router.extend({
  renderPage(page, options = {layout: true}) {
    if (options.layout) {
      page = <LinkHelper><Layout>{page}</Layout></LinkHelper>
    }
    React.render(page, document.body)
  },
  routes: {
    '': 'public',
    'repos': 'repos'
  },
  public() {
    this.renderPage(<LinkHelper><Public /></LinkHelper>, {layout: false})
  },
  repos() {
    this.renderPage(<Repos />)
  }
})