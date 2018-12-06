const {
    unknownRequest, 
    discoveryRequest, 
    thermostatControllerRequest,
    unknownControllerRequest
} = require('../resources/json')

const index = require('../../index')

jest.mock('../../directives/Alexa.ThermostatController')
const ThermostatController = require('../../directives/Alexa.ThermostatController')
jest.mock('../../directives/Alexa.Discovery')
const Discovery = require('../../directives/Alexa.Discovery')

const cb = jest.fn()

beforeEach(()=> {
    // reset mock after each test so the called times value is correct
    cb.mockClear()
    Discovery.handleRequest.mockClear()
    ThermostatController.handleRequest.mockClear()
})

describe('Testing index', () => {
    test('incoming request unknown', () => {
        const res = index.handler(unknownRequest, {}, cb)
        expect(cb).toHaveBeenCalledTimes(1)
        expect(Discovery.handleRequest).toHaveBeenCalledTimes(0)
        expect(ThermostatController.handleRequest).toHaveBeenCalledTimes(0)
        expect(cb).toHaveBeenCalledWith(new Error('Request could not be handled: ' + unknownRequest))
    })

    test('incoming request for discovery', () => {
        const res = index.handler(discoveryRequest, {}, cb)
        expect(Discovery.handleRequest).toHaveBeenCalledTimes(1)
        expect(ThermostatController.handleRequest).toHaveBeenCalledTimes(0)
        expect(Discovery.handleRequest).toHaveBeenCalledWith(discoveryRequest, {}, cb)
    })

    test('incoming request for unknown controller', () => {
        const res = index.handler(unknownControllerRequest, {}, cb)
        expect(Discovery.handleRequest).toHaveBeenCalledTimes(0)
        expect(ThermostatController.handleRequest).toHaveBeenCalledTimes(0)
        expect(cb).toHaveBeenCalledWith(new Error('Request could not be handled: ' + unknownRequest))
    })

    test('incoming request for known controller', () => {
        const res = index.handler(thermostatControllerRequest, {}, cb)
        expect(ThermostatController.handleRequest).toHaveBeenCalledTimes(1)
        expect(ThermostatController.handleRequest).toHaveBeenCalledWith(thermostatControllerRequest, {}, cb)
    })
})
