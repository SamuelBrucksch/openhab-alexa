const rest = require('../../../rest/rest')

describe('Test REST API', () => {
    test('Check if all items are loaded', (done) => {
        rest.getItems(null, (res) => {
            expect(res).toBeInstanceOf(Array)
            expect(res.length).toBeGreaterThan(5)
            done()
        }, (err) => {
            expect(1).toBe(2)
            done()
        })
    })

    test('Check if one item is loaded', (done) => {
        rest.getItem(null, 'Weather_Chart', (res) => {
            expect(res).toMatchObject({
                "link": "http://demo.openhab.org:8080/rest/items/Weather_Chart",
                "name": "Weather_Chart"
            })
            done()
        }, (err) => {
            expect(1).toBe(2)
            done()
        })
    })
})