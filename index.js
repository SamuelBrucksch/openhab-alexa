/**
 * Copyright (c) 2014-2016 by the respective copyright holders.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 */

var log = require('./log.js');

/**
 * Main entry point.
 * Incoming requests from Alexa Smarthome API are processed via this method.
 * 
 * @param request
 * @param context
 * @param callback
 */
exports.handler = function (request, context, callback) {
    log.info('Incoming Request: ' + JSON.stringify(request));
    try {
        const controller = require('./directives/' + request.directive.header.namespace)
        return controller.handleRequest(request, context, callback)
    } catch (error) {
        log.error('Request could not be handled: ' + request)
         // TODO handle error
        callback(new Error('Request could not be handled: ' + request))
    }
};
