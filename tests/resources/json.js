const unknownRequest = {
  directive: {
    header: {
      namespace: 'Alexa.BlaBla',
    }
  }
}

const discoveryRequest = {
  directive: {
    header: {
      namespace: 'Alexa.Discovery',
      name: 'Discover',
      payloadVersion: '3',
      messageId: '1bd5d003-31b9-476f-ad03-71d471922820'
    },
    payload: {
      scope: {
        type: 'BearerToken',
        token: 'access-token-from-skill'
      }
    }
  }
}

const unknownControllerRequest = {
  "directive": {
    "header": {
      "namespace": "Alexa.UnknownController"
    },
  }
}

const thermostatControllerRequest = {
  "directive": {
    "header": {
      "namespace": "Alexa.ThermostatController",
      "name": "SetTargetTemperature",
      "payloadVersion": "3",
      "messageId": "1bd5d003-31b9-476f-ad03-71d471922820",
      "correlationToken": "dFMb0z+PgpgdDmluhJ1LddFvSqZ/jCc8ptlAKulUj90jSqg=="
    },
    "endpoint": {
      "scope": {
        "type": "BearerToken",
        "token": "access-token-from-skill"
      },
      "endpointId": "appliance-001",
      "cookie": {}
    },
    "payload": {
      "targetSetpoint": {
        "value": 20.0,
        "scale": "CELSIUS"
      }
    }
  }
}

module.exports = {
  unknownRequest,
  thermostatControllerRequest,
  discoveryRequest,
  unknownControllerRequest
}
