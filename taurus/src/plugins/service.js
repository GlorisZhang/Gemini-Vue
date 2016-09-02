/**
 * @module service
 * Taurus服务调用模块
 */
import Vue from 'vue';
import VueResource from 'vue-resource';
import cookieHelper from '../utils/cookie-helper';
import appConfig from '../config/app-config.json';
var ServiceCallerPlugin;
var ServiceCaller = {
  get: function (service, options) {
    options = options || {};
    Vue.http.post(service).then(options.success, options.error);
  },
  post: function (service, parameters, options) {
    var p;
    if (typeof parameters === 'string') {
      p = parameters;
    } else if (typeof parameters === 'object') {
      p = JSON.stringify(parameters);
    } else {
      p = '';
    }
    if (/^(http|https):\/\//i.test(service) === false) {
      service = appConfig.web.root + service;
    }
    options = options || {};
    Vue.http.post(service, normalizeParameter(p), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Accept': 'application/json, text/javascript, */*; q=0.01'
      }
    }).then(function (response) {
      var result = response.json();
      if (result.hub_code === '1' || result.hub_code === 1) {
        options.success.call(this, result.data);
      } else {
        options.error.apply(this, [result.hub_code, result.hub_exception]);
      }
    }, function (response) {
      options.error.apply(this, [response.status, '']);
    });
  }
};

Vue.use(VueResource);

function warn$1 (msg) {
  if (typeof console !== 'undefined') {
    console.error('[vue-service] ' + msg);
  }
}

/*
 * 将参数放入报文框架内
 * @param {string} p 参数字符串
 */
function normalizeParameter (p) {
  var sec = appConfig.sec;
  var s = p;
  var token = cookieHelper.readCookie(sec.SEC_AUTH_TOKEN_KEY) || '';
  var tenant = cookieHelper.readCookie(sec.SEC_AUTH_TENANT_KEY) || '';
  var roleType = cookieHelper.readCookie(sec.SEC_AUTH_ROLETYPE_KEY) || '';
  var zone = cookieHelper.readCookie(sec.SEC_AUTH_ZONE_KEY) || '';

  s += '&token=' + token + '&tenant=' + tenant + '&roleType=' + roleType + '&zone=' + zone;
  return 'WEB_HUB_PARAMS=' + s;
}

ServiceCallerPlugin = {
  _installed: false,
  install: function (Vue, options) {
    if (ServiceCallerPlugin._installed) {
      warn$1('ServiceCallerPlugin already installed.');
      return;
    }
    Vue.prototype.$service = ServiceCaller;
    Vue.service = ServiceCaller;

    ServiceCallerPlugin._installed = true;
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ServiceCallerPlugin);
}
module.exports = ServiceCallerPlugin;
