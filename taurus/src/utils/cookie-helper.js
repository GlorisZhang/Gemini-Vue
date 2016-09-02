/*
 * @module cookie-helper
 * Modification based on jQuery Cookie Plugin v1.4.1
 *
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
var pluses = /\+/g;

var config = {
  default: {},
  /** 写Cookie */
  writeCookie: function (key, value, options) {
    var days, t;
    options = ext(this.default, options);
    if (typeof options.expires === 'number') {
      days = options.expires;
      t = options.expires = new Date();
      t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
    }
    return (document.cookie = [
      encode(key), '=', stringifyCookieValue(value),
      options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
      options.path ? '; path=' + options.path : '',
      options.domain ? '; domain=' + options.domain : '',
      options.secure ? '; secure' : ''
    ].join(''));
  },
  /** 读Cookie */
  readCookie: function (key, value) {
    var result = key ? undefined : {};
      // To prevent the for loop in the first place assign an empty array
      // in case there are no cookies at all. Also prevents odd result when
      // calling readCookie().
    var cookies = document.cookie ? document.cookie.split('; ') : [];
    var i = 0;
    var l = cookies.length;
    var parts;
    var name;
    var cookie;
    for (; i < l; i++) {
      parts = cookies[i].split('=');
      name = decode(parts.shift());
      cookie = parts.join('=');
      if (key === name) {
        // If second argument (value) is a function it's a converter...
        result = read(cookie, value);
        break;
      }
      // Prevent storing a cookie that we couldn't decode.
      if (!key && (cookie = read(cookie)) !== undefined) {
        result[name] = cookie;
      }
    }
    return result;
  },
  /** 删除Cookie */
  removeCookie: function (key, options) {
    this.writeCookie(key, '', ext(options, { expires: -1 }));
    return !this.readCookie(key);
  }
};

function encode (s) {
  return config.raw ? s : encodeURIComponent(s);
}
function decode (s) {
  return config.raw ? s : decodeURIComponent(s);
}
function stringifyCookieValue (value) {
  return encode(config.json ? JSON.stringify(value) : String(value));
}
function parseCookieValue (s) {
  if (s.indexOf('"') === 0) {
    // This is a quoted cookie as according to RFC2068, unescape...
    s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
  }
  try {
    // Replace server-side written pluses with spaces.
    // If we can't decode the cookie, ignore it, it's unusable.
    // If we can't parse the cookie, ignore it, it's unusable.
    s = decodeURIComponent(s.replace(pluses, ' '));
    return config.json ? JSON.parse(s) : s;
  } catch (e) {}
}
function read (s, converter) {
  var value = config.raw ? s : parseCookieValue(s);
  return typeof (converter) === 'function' ? converter(value) : value;
}
/** 临时写的辅助函数，复制属性，后续将使用其他方式替换 */
function ext (target, source) {
  var k;
  var obj = {};
  if (typeof target === 'object') {
    for (k in target) {
      obj[k] = target[k];
    }
  }
  if (typeof source === 'object') {
    for (k in source) {
      obj[k] = source[k];
    }
  }
  return obj;
}
module.exports = config;
