const config = {
  'localhost': {
    authUrl: 'http://vandosant-gatekeeper.herokuapp.com/authenticate',
    clientId: 'ffa9424ab602a3fd520a'
  },

  'vandosant-hubtag.surge.sh': {
    authUrl: 'http://vandosant-gatekeeper.herokuapp.com/authenticate',
    clientId: 'ffa9424ab602a3fd520a'
  }
}[window.location.hostname]

export default config
