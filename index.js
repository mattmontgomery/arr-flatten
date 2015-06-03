/*!
 * arr-flatten <https://github.com/jonschlinkert/arr-flatten>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';
define(function(require, exports, module) {
  var flatten = function(arr) {
    return flat(arr, []);
  };
  
  function flat(arr, res) {
    var len = arr.length;
    var i = -1;
  
    while (len--) {
      var cur = arr[++i];
      if (Array.isArray(cur)) {
        flat(cur, res);
      } else {
        res.push(cur);
      }
    }
    return res;
  }
  module.exports = flatten;
  return flatten;
});
