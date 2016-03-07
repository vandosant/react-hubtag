const config = {
  'localhost': {
    authUrl: 'http://vandosant-gatekeeper.herokuapp.com/authenticate',
    clientId: 'ffa9424ab602a3fd520a'
  },

  'vandosant-hubtag.surge.sh': {
    authUrl: 'http://vandosant-gatekeeper.herokuapp.com/authenticate',
    clientId: '5f69c671afe8d48b4a1f'
  }
}[window.location.hostname]

export default config
