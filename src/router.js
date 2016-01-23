import Router from 'ampersand-router'
import React from 'react'
import qs from 'qs'
import xhr from 'xhr'
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
    'repos': 'repos',
    'login': 'login',
    'auth/callback?:query': 'authCallback'
  },
  public() {
    this.renderPage(<LinkHelper><Public /></LinkHelper>, {layout: false})
  },
  repos() {
    this.renderPage(<Repos />)
  },
  login() {
    window.location = 'https://github.com/login/oauth/authorize?' +
    qs.stringify({
      client_id: 'ffa9424ab602a3fd520a',
      redirect_uri: window.location.origin + '/auth/callback',
      scope: 'user,repo'
    })
  },
  authCallback (query) {
    query = qs.parse(query)
    xhr({
      url: 'http://vandosant-gatekeeper.herokuapp.com/authenticate/' + query.code,
      json:true
    }, (err, req, body) => {
      console.log(body)
    })
  }
})