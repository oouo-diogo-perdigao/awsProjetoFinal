/*
 * API Pagamentos
 * Este é um exemplo de serviço de validação de pagamentos
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.10
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Authorization', 'model/Buy', 'model/Payment', 'model/Status', 'model/User', 'api/PaymentApi', 'api/ValidationApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Authorization'), require('./model/Buy'), require('./model/Payment'), require('./model/Status'), require('./model/User'), require('./api/PaymentApi'), require('./api/ValidationApi'));
  }
}(function(ApiClient, Authorization, Buy, Payment, Status, User, PaymentApi, ValidationApi) {
  'use strict';

  /**
   * Este__um_exemplo_de_servio_de_validao_de_pagamentos.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var ApiPagamentos = require('index'); // See note below*.
   * var xxxSvc = new ApiPagamentos.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new ApiPagamentos.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new ApiPagamentos.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new ApiPagamentos.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Authorization model constructor.
     * @property {module:model/Authorization}
     */
    Authorization: Authorization,
    /**
     * The Buy model constructor.
     * @property {module:model/Buy}
     */
    Buy: Buy,
    /**
     * The Payment model constructor.
     * @property {module:model/Payment}
     */
    Payment: Payment,
    /**
     * The Status model constructor.
     * @property {module:model/Status}
     */
    Status: Status,
    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User: User,
    /**
     * The PaymentApi service constructor.
     * @property {module:api/PaymentApi}
     */
    PaymentApi: PaymentApi,
    /**
     * The ValidationApi service constructor.
     * @property {module:api/ValidationApi}
     */
    ValidationApi: ValidationApi
  };

  return exports;
}));
