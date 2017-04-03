webpackHotUpdate(0,{

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(11);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactWavesurfer = __webpack_require__(185);\n\nvar _reactWavesurfer2 = _interopRequireDefault(_reactWavesurfer);\n\n__webpack_require__(199);\n\nvar _Track = __webpack_require__(92);\n\nvar _Track2 = _interopRequireDefault(_Track);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Player = function (_React$Component) {\n\t_inherits(Player, _React$Component);\n\n\tfunction Player(props) {\n\t\t_classCallCheck(this, Player);\n\n\t\tvar _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, props));\n\n\t\t_this.state = {\n\t\t\tplaying: false,\n\t\t\tsong: null,\n\t\t\tpos: 0\n\t\t};\n\n\t\t_this.handlePosChange = _this.handlePosChange.bind(_this);\n\t\treturn _this;\n\t}\n\n\t_createClass(Player, [{\n\t\tkey: 'handlePosChange',\n\t\tvalue: function handlePosChange(e) {\n\t\t\tthis.setState({\n\t\t\t\tpos: e.originalArgs[0]\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'togglePlay',\n\t\tvalue: function togglePlay(item) {\n\t\t\tthis.setState({\n\t\t\t\tplaying: !this.state.playing,\n\t\t\t\tsong: item.songPath\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _this2 = this;\n\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'player-container' },\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'h2',\n\t\t\t\t\tnull,\n\t\t\t\t\t'Top Tracks'\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'track-list-container' },\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'track-list-headers' },\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'p',\n\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t'#'\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'p',\n\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t'Song'\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'p',\n\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t'Album'\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'p',\n\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t'Time'\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t)\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'track-list-body' },\n\t\t\t\t\t\tthis.props.tracks.map(function (track) {\n\t\t\t\t\t\t\treturn _react2.default.createElement(_Track2.default, {\n\t\t\t\t\t\t\t\tkey: track.index,\n\t\t\t\t\t\t\t\tnum: track.num,\n\t\t\t\t\t\t\t\tname: track.name,\n\t\t\t\t\t\t\t\tsongPath: track.songPath,\n\t\t\t\t\t\t\t\talbum: track.album,\n\t\t\t\t\t\t\t\ttime: track.time,\n\t\t\t\t\t\t\t\tisPlaying: _this2.state.playing,\n\t\t\t\t\t\t\t\tselectedSong: _this2.state.song,\n\t\t\t\t\t\t\t\thandleTogglePlay: _this2.togglePlay.bind(_this2, track)\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t})\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(_reactWavesurfer2.default, {\n\t\t\t\t\taudioFile: this.state.song,\n\t\t\t\t\tpos: this.state.pos,\n\t\t\t\t\tonPosChange: this.handlePosChange,\n\t\t\t\t\tplaying: this.state.playing\n\t\t\t\t})\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn Player;\n}(_react2.default.Component);\n\nexports.default = Player;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wbGF5ZXIvUGxheWVyLmpzeD8xYmU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBXYXZlc3VyZmVyIGZyb20gJ3JlYWN0LXdhdmVzdXJmZXInXG5cbmltcG9ydCAnLi4vLi4vLi4vc3RhdGljL3N0eWxlcy9jb21wb25lbnRzL3Byb2ZpbGUvcGxheWVyJ1xuaW1wb3J0IFRyYWNrIGZyb20gJy4vVHJhY2snXG5cblxuY2xhc3MgUGxheWVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0cGxheWluZzogZmFsc2UsXG5cdFx0XHRzb25nOiBudWxsLFxuXHRcdFx0cG9zOiAwXG5cdFx0fVxuXG5cdFx0dGhpcy5oYW5kbGVQb3NDaGFuZ2UgPSB0aGlzLmhhbmRsZVBvc0NoYW5nZS5iaW5kKHRoaXMpO1xuXHR9XG5cblx0aGFuZGxlUG9zQ2hhbmdlKGUpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHBvczogZS5vcmlnaW5hbEFyZ3NbMF1cblx0XHR9KVxuXHR9XG5cblx0dG9nZ2xlUGxheShpdGVtKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRwbGF5aW5nOiAhdGhpcy5zdGF0ZS5wbGF5aW5nLFxuXHRcdFx0c29uZzogaXRlbS5zb25nUGF0aFxuXHRcdH0pO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGxheWVyLWNvbnRhaW5lcic+XG5cdFx0XHRcdDxoMj5Ub3AgVHJhY2tzPC9oMj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndHJhY2stbGlzdC1jb250YWluZXInPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0cmFjay1saXN0LWhlYWRlcnMnPlxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0PHA+IzwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHQ8cD5Tb25nPC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdDxwPkFsYnVtPC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdDxwPlRpbWU8L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0cmFjay1saXN0LWJvZHknPlxuXHRcdFx0XHRcdFx0e3RoaXMucHJvcHMudHJhY2tzLm1hcCh0cmFjayA9PlxuXHRcdFx0XHRcdFx0XHQ8VHJhY2sgXG5cdFx0XHRcdFx0XHRcdFx0a2V5PXt0cmFjay5pbmRleH0gXG5cdFx0XHRcdFx0XHRcdFx0bnVtPXt0cmFjay5udW19IFxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9e3RyYWNrLm5hbWV9XG5cdFx0XHRcdFx0XHRcdFx0c29uZ1BhdGg9e3RyYWNrLnNvbmdQYXRofSBcblx0XHRcdFx0XHRcdFx0XHRhbGJ1bT17dHJhY2suYWxidW19IFxuXHRcdFx0XHRcdFx0XHRcdHRpbWU9e3RyYWNrLnRpbWV9XG5cdFx0XHRcdFx0XHRcdFx0aXNQbGF5aW5nPXt0aGlzLnN0YXRlLnBsYXlpbmd9XG5cdFx0XHRcdFx0XHRcdFx0c2VsZWN0ZWRTb25nPXt0aGlzLnN0YXRlLnNvbmd9IFxuXHRcdFx0XHRcdFx0XHRcdGhhbmRsZVRvZ2dsZVBsYXk9e3RoaXMudG9nZ2xlUGxheS5iaW5kKHRoaXMsIHRyYWNrKX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxXYXZlc3VyZmVyXG5cdFx0XHRcdFx0YXVkaW9GaWxlPXt0aGlzLnN0YXRlLnNvbmd9XG5cdFx0XHRcdFx0cG9zPXt0aGlzLnN0YXRlLnBvc31cblx0XHRcdFx0XHRvblBvc0NoYW5nZT17dGhpcy5oYW5kbGVQb3NDaGFuZ2V9XG5cdFx0XHRcdFx0cGxheWluZz17dGhpcy5zdGF0ZS5wbGF5aW5nfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wbGF5ZXIvUGxheWVyLmpzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFFQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBVEE7QUFVQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFiQTtBQWtCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFEQTtBQURBO0FBbkJBO0FBb0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQXZDQTtBQStDQTs7OztBQTNFQTtBQUNBO0FBNkVBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})