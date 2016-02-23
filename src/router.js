import Router from 'ampersand-router'
import app from 'ampersand-app'
import React from 'react'
import qs from 'qs'
import xhr from 'xhr'
import Public from './pages/public'
import Repos from './pages/repos'
import RepoDetail from './pages/repo-detail'
import Layout from './layout'
import LinkHelper from './components/link-helper'

export default Router.extend({
  renderPage(page, options = {layout: true}) {
    if (options.layout) {
      page = <LinkHelper><Layout me={app.me}>{page}</Layout></LinkHelper>
    }
    React.render(page, document.body)
  },
  routes: {
    '': 'public',
    'repos': 'repos',
    'repo/:owner/:name': 'repoDetail',
    'login': 'login',
    'logout': 'logout',
    'auth/callback?:query': 'authCallback',
  },
  public() {
    this.renderPage(<LinkHelper><Public /></LinkHelper>, {layout: false})
  },
  repos() {
    this.renderPage(<Repos repos={app.me.repos}/>)
  },
  repoDetail(owner, name) {
    const model = app.me.repos.getByFullName(owner + '/' + name)
    this.renderPage(<RepoDetail repo={model}/>)
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
    const {code} = qs.parse(query)
    xhr({
      url: 'http://vandosant-gatekeeper.herokuapp.com/authenticate/' + code,
      json: true
    }, (err, req, body) => {
      console.log(body)
      app.me.token = body.token
      this.redirectTo('/repos')
    })
  },
  logout() {
    window.localStorage.clear()
    window.location = '/'
  }
})