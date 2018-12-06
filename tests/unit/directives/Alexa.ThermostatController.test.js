const { handleRequest } = require('../../../directives/Alexa.ThermostatController')

const { thermostatControllerRequest } = require('../../resources/json')

describe('Tests for Discovery', () => {
  test('CB returns error for unknown action', done => {
    handleRequest({ directive: { header: { name: 'UnknownAction' } } }, {}, (err, res) => {
      expect(err).toEqual(new Error('Could not handle ThermostatController request'))
      expect(res).toBeUndefined()
      done()
    })
  })
  
  test('CB returns success', done => {
    handleRequest(thermostatControllerRequest, {}, (err, res) => {
      expect(err).toBeNull()
      expect(res).toEqual('success')
      done()
    })
  })
})
