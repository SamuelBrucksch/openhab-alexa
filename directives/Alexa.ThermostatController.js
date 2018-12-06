const handleRequest = (request, context, callback) => {
    switch (request.directive.header.name) {
        case 'SetTargetTemperature':
            setTargetTemperature(request, context, callback)
            break;
        case 'AdjustTargetTemperature':
            adjustTargetTemperature(request, context, callback)
            break;
        case 'SetThermostatMode':
            setThermostatMode(request, context, callback)
            break;
        case 'ResumeSchedule':
            resumeSchedule(request, context, callback)
            break;
        default:
            callback(new Error('Could not handle ThermostatController request'))
            break;
    }
};

const setTargetTemperature = (request, context, callback) => {
    const targetSetpoint = request.directive.payload.targetSetpoint
    const schedule = request.directive.payload.schedule

    // TODO
    callback(null, 'success')
}

/**
 * Adjusts the target temperature
 * https://developer.amazon.com/de/docs/device-apis/alexa-thermostatcontroller.html#adjusttargettemperature
 * 
 * User: Alexa, make it warmer in here
 * User: Alexa, make it cooler in here
 * 
 * @param {*} request 
 * @param {*} context 
 */
const adjustTargetTemperature = (request, context, callback) => {
    const targetSetpointDelta = request.directive.payload.targetSetpointDelta

    // TODO
}

/**
 * Sets the thermostat mode
 * https://developer.amazon.com/de/docs/device-apis/alexa-thermostatcontroller.html#setthermostatmode
 * 
 * Thermostat modes can be AUTO, COOL, HEAT, ECO, OFF
 * https://developer.amazon.com/de/docs/device-apis/alexa-property-schemas.html#thermostat-mode-values
 * 
 * User: Alexa, set thermostat name to mode
 * User: Alexa, set thermostat to automatic
 * 
 * @param {*} request 
 * @param {*} context 
 */
const setThermostatMode = (request, context, callback) => {
    const thermostatMode = request.directive.payload.thermostatMode

    // TODO
}

/**
 * Resumes the schedule
 * https://developer.amazon.com/de/docs/device-apis/alexa-thermostatcontroller.html#resumeschedule
 * User: Alexa, resume thermostat schedule
 * 
 * @param {*} request 
 * @param {*} context 
 */
const resumeSchedule = (request, context, callback) => {
    // TODO
}

module.exports = {
    handleRequest
}