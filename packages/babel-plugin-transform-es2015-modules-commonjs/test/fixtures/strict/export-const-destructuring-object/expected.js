"use strict";
"use exports { bar, baz }";

exports.baz = exports.bar = void 0;
const {
  foo: bar,
  baz
} = {};
exports.baz = baz;
exports.bar = bar;
