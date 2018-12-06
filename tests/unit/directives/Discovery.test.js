const {handleRequest} = require('../../../directives/Alexa.Discovery')

const {discoveryRequest} = require('../../resources/json')

describe('Tests for Discovery', () => {
    test('CB returns success', () => {
        handleRequest(discoveryRequest, {}, (err, res) => {
            expect(err).toBeNull()
            expect(res).toEqual('success')
        })
    })
})