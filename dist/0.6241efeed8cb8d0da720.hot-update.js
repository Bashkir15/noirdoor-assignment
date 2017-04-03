webpackHotUpdate(0,{

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(11);\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(198);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Header = function (_React$Component) {\n\t_inherits(Header, _React$Component);\n\n\tfunction Header(props) {\n\t\t_classCallCheck(this, Header);\n\n\t\treturn _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));\n\t}\n\n\t_createClass(Header, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\n\t\t\tvar artistName = this.props.artist.name.split('-').join(' ');\n\t\t\tvar artistGenre = this.props.artist.genres.split(',').join('/');\n\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'artist-header' },\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'artist-header-image' },\n\t\t\t\t\t_react2.default.createElement('div', null)\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'artist-header-info' },\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'h1',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\tartistName\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'p',\n\t\t\t\t\t\t{ className: 'details' },\n\t\t\t\t\t\tartistGenre\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'p',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\tthis.props.artist.bio\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn Header;\n}(_react2.default.Component);\n\nexports.default = Header;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9oZWFkZXIvSGVhZGVyLmpzeD9kZTE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0ICcuLi8uLi8uLi9zdGF0aWMvc3R5bGVzL2NvbXBvbmVudHMvcHJvZmlsZS9oZWFkZXInXG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHR9XG5cdFxuXHRyZW5kZXIoKSB7XG5cblx0XHRjb25zdCBhcnRpc3ROYW1lID0gdGhpcy5wcm9wcy5hcnRpc3QubmFtZS5zcGxpdCgnLScpLmpvaW4oJyAnKTtcblx0XHRjb25zdCBhcnRpc3RHZW5yZSA9IHRoaXMucHJvcHMuYXJ0aXN0LmdlbnJlcy5zcGxpdCgnLCcpLmpvaW4oJy8nKVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdhcnRpc3QtaGVhZGVyJz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2FydGlzdC1oZWFkZXItaW1hZ2UnPlxuXHRcdFx0XHRcdDxkaXY+PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdhcnRpc3QtaGVhZGVyLWluZm8nPlxuXHRcdFx0XHRcdDxoMT57YXJ0aXN0TmFtZX08L2gxPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nZGV0YWlscyc+e2FydGlzdEdlbnJlfTwvcD5cblxuXHRcdFx0XHRcdDxwPnt0aGlzLnByb3BzLmFydGlzdC5iaW99PC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0gXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvY29tcG9uZW50cy9wcm9maWxlL2hlYWRlci9IZWFkZXIuanN4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFMQTtBQWFBOzs7O0FBeEJBO0FBQ0E7QUEwQkEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})