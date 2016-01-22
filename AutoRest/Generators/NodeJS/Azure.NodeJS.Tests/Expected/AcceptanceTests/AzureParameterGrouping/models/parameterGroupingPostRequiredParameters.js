/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the ParameterGroupingPostRequiredParameters class.
 * @constructor
 * Additional parameters for the postRequired operation.
 * @member {number} body
 * 
 * @member {string} [customHeader]
 * 
 * @member {number} [query] Query parameter with default. Default value: 30 .
 * 
 * @member {string} path Path parameter
 * 
 */
function ParameterGroupingPostRequiredParameters() {
}

/**
 * Defines the metadata of ParameterGroupingPostRequiredParameters
 *
 * @returns {object} metadata of ParameterGroupingPostRequiredParameters
 *
 */
ParameterGroupingPostRequiredParameters.prototype.mapper = function () {
  return {
    required: false,
    type: {
      name: 'Composite',
      className: 'ParameterGroupingPostRequiredParameters',
      modelProperties: {
        body: {
          required: true,
          type: {
            name: 'Number'
          }
        },
        customHeader: {
          required: false,
          type: {
            name: 'String'
          }
        },
        query: {
          required: false,
          defaultValue: '30',
          type: {
            name: 'Number'
          }
        },
        path: {
          required: true,
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = ParameterGroupingPostRequiredParameters;
