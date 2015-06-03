// Influnced by polymer project.
'use strict';
var util = require('util');

module.exports = function(href, onload, onerror) {
  var link = document.createElement('link');
  link.rel = 'import';
  link.href = href;
  if (onload && util.isFunction(onload)) {
    link.onload = onload.bind(this);
  }
  if (onerror && util.isFunction(onerror)) {
    link.onerror = onerror.bind(this);
  }
  document.head.appendChild(link);
  return link;
};
