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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./User'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiPagamentos) {
      root.ApiPagamentos = {};
    }
    root.ApiPagamentos.Buy = factory(root.ApiPagamentos.ApiClient, root.ApiPagamentos.User);
  }
}(this, function(ApiClient, User) {
  'use strict';

  /**
   * The Buy model module.
   * @module model/Buy
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Buy</code>.
   * @alias module:model/Buy
   * @class
   * @param value {Number} Valor da compra
   * @param fret {Number} Valor do frete
   * @param info {String} Informações sobre o pagamento
   * @param method {module:model/Buy.MethodEnum} Tipo de pagamento, visa, boleto, mastercard, etc
   * @param user {module:model/User} 
   */
  var exports = function(value, fret, info, method, user) {
    this.value = value;
    this.fret = fret;
    this.info = info;
    this.method = method;
    this.user = user;
  };

  /**
   * Constructs a <code>Buy</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Buy} obj Optional instance to populate.
   * @return {module:model/Buy} The populated <code>Buy</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'Number');
      if (data.hasOwnProperty('moeda'))
        obj.moeda = ApiClient.convertToType(data['moeda'], 'String');
      if (data.hasOwnProperty('fret'))
        obj.fret = ApiClient.convertToType(data['fret'], 'Number');
      if (data.hasOwnProperty('info'))
        obj.info = ApiClient.convertToType(data['info'], 'String');
      if (data.hasOwnProperty('installments'))
        obj.installments = ApiClient.convertToType(data['installments'], 'Number');
      if (data.hasOwnProperty('cc'))
        obj.cc = ApiClient.convertToType(data['cc'], 'Number');
      if (data.hasOwnProperty('method'))
        obj.method = ApiClient.convertToType(data['method'], 'String');
      if (data.hasOwnProperty('user'))
        obj.user = User.constructFromObject(data['user']);
    }
    return obj;
  }

  /**
   * Valor da compra
   * @member {Number} value
   */
  exports.prototype.value = undefined;

  /**
   * @member {String} moeda
   */
  exports.prototype.moeda = undefined;

  /**
   * Valor do frete
   * @member {Number} fret
   */
  exports.prototype.fret = undefined;

  /**
   * Informações sobre o pagamento
   * @member {String} info
   */
  exports.prototype.info = undefined;

  /**
   * Quantidade de parcelas do pagamento
   * @member {Number} installments
   */
  exports.prototype.installments = undefined;

  /**
   * 4 digitos do cartao de credito para validar antifraude
   * @member {Number} cc
   */
  exports.prototype.cc = undefined;

  /**
   * Tipo de pagamento, visa, boleto, mastercard, etc
   * @member {module:model/Buy.MethodEnum} method
   */
  exports.prototype.method = undefined;

  /**
   * @member {module:model/User} user
   */
  exports.prototype.user = undefined;


  /**
   * Allowed values for the <code>method</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MethodEnum = {
    /**
     * value: "credito visa"
     * @const
     */
    creditoVisa: "credito visa",

    /**
     * value: "debito visa"
     * @const
     */
    debitoVisa: "debito visa",

    /**
     * value: "credito mastercard"
     * @const
     */
    creditoMastercard: "credito mastercard",

    /**
     * value: "debito mastercard"
     * @const
     */
    debitoMastercard: "debito mastercard",

    /**
     * value: "boleto"
     * @const
     */
    boleto: "boleto"
  };

  return exports;

}));