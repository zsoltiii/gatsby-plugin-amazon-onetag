"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

exports.onRenderBody = function (_ref, pluginOptions) {
  var setPostBodyComponents = _ref.setPostBodyComponents;
  var adInstanceId = pluginOptions.adInstanceId,
      _pluginOptions$includ = pluginOptions.includeInDevelopment,
      includeInDevelopment = _pluginOptions$includ === void 0 ? false : _pluginOptions$includ,
      _pluginOptions$market = pluginOptions.marketplace,
      marketplace = _pluginOptions$market === void 0 ? "US" : _pluginOptions$market;
  var amznId = "amzn-assoc-ad-" + adInstanceId;
  var amznSrc = "//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=" + marketplace + "&adInstanceId=" + adInstanceId;

  if (process.env.NODE_ENV === "production" || includeInDevelopment) {
    setPostBodyComponents([_react.default.createElement("div", {
      id: amznId
    }), _react.default.createElement("script", {
      key: "plugin-amazon-onetag",
      async: true,
      defer: true,
      src: amznSrc
    })]);
  }
};