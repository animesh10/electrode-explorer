"use strict";
var extendRequire = require("isomorphic-loader/lib/extend-require");
extendRequire()
  .then(function () {
    /*eslint-disable*/
    require("babel-core/register");
    require("@walmart/electrode-wml-server")(require("@walmart/electrode-config").config);
    /*eslint-enable*/
  })
  .catch(function (err) {
    console.log("extendRequire failed", err.stack); // eslint-disable-line no-console
  });
