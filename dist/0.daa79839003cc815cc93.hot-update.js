webpackHotUpdate(0,{

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(11);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactWavesurfer = __webpack_require__(185);\n\nvar _reactWavesurfer2 = _interopRequireDefault(_reactWavesurfer);\n\n__webpack_require__(199);\n\nvar _Track = __webpack_require__(92);\n\nvar _Track2 = _interopRequireDefault(_Track);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Player = function (_React$Component) {\n\t_inherits(Player, _React$Component);\n\n\tfunction Player(props) {\n\t\t_classCallCheck(this, Player);\n\n\t\tvar _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, props));\n\n\t\t_this.state = {\n\t\t\tplaying: false,\n\t\t\tsong: null,\n\t\t\tpos: 0\n\t\t};\n\n\t\t_this.handlePosChange = _this.handlePosChange.bind(_this);\n\t\treturn _this;\n\t}\n\n\t_createClass(Player, [{\n\t\tkey: 'handlePosChange',\n\t\tvalue: function handlePosChange(e) {\n\t\t\tthis.setState({\n\t\t\t\tpos: e.originalArgs[0]\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'togglePlay',\n\t\tvalue: function togglePlay(item) {\n\t\t\tthis.setState({\n\t\t\t\tplaying: !this.state.playing,\n\t\t\t\tsong: item.location\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _this2 = this;\n\n\t\t\tvar tNum = 0;\n\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'player-container' },\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'h2',\n\t\t\t\t\tnull,\n\t\t\t\t\t'Top Tracks'\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'track-list-container' },\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'track-list-headers' },\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'p',\n\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t'#'\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'p',\n\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t'Song'\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'p',\n\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t'Album'\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'p',\n\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t'Time'\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t)\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'track-list-body' },\n\t\t\t\t\t\tthis.props.tracks.map(function (track) {\n\t\t\t\t\t\t\treturn _react2.default.createElement(_Track2.default, {\n\t\t\t\t\t\t\t\tkey: tNum++,\n\t\t\t\t\t\t\t\tnum: tNum,\n\t\t\t\t\t\t\t\tname: track.name,\n\t\t\t\t\t\t\t\tsongPath: track.location,\n\t\t\t\t\t\t\t\talbum: track.album,\n\t\t\t\t\t\t\t\ttime: track.time,\n\t\t\t\t\t\t\t\tisPlaying: _this2.state.playing,\n\t\t\t\t\t\t\t\tselectedSong: _this2.state.song,\n\t\t\t\t\t\t\t\thandleTogglePlay: _this2.togglePlay.bind(_this2, track)\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t})\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(_reactWavesurfer2.default, {\n\t\t\t\t\taudioFile: this.state.song,\n\t\t\t\t\tpos: this.state.pos,\n\t\t\t\t\tonPosChange: this.handlePosChange,\n\t\t\t\t\tplaying: this.state.playing\n\t\t\t\t})\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn Player;\n}(_react2.default.Component);\n\nexports.default = Player;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wbGF5ZXIvUGxheWVyLmpzeD8xYmU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBXYXZlc3VyZmVyIGZyb20gJ3JlYWN0LXdhdmVzdXJmZXInXG5cbmltcG9ydCAnLi4vLi4vLi4vc3RhdGljL3N0eWxlcy9jb21wb25lbnRzL3Byb2ZpbGUvcGxheWVyJ1xuaW1wb3J0IFRyYWNrIGZyb20gJy4vVHJhY2snXG5cblxuY2xhc3MgUGxheWVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0cGxheWluZzogZmFsc2UsXG5cdFx0XHRzb25nOiBudWxsLFxuXHRcdFx0cG9zOiAwXG5cdFx0fVxuXG5cdFx0dGhpcy5oYW5kbGVQb3NDaGFuZ2UgPSB0aGlzLmhhbmRsZVBvc0NoYW5nZS5iaW5kKHRoaXMpO1xuXHR9XG5cblx0aGFuZGxlUG9zQ2hhbmdlKGUpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHBvczogZS5vcmlnaW5hbEFyZ3NbMF1cblx0XHR9KVxuXHR9XG5cblx0dG9nZ2xlUGxheShpdGVtKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRwbGF5aW5nOiAhdGhpcy5zdGF0ZS5wbGF5aW5nLFxuXHRcdFx0c29uZzogaXRlbS5sb2NhdGlvblxuXHRcdH0pO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGxldCB0TnVtID0gMDtcblxuXHRcdHJldHVybiAoXG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwbGF5ZXItY29udGFpbmVyJz5cblx0XHRcdFx0PGgyPlRvcCBUcmFja3M8L2gyPlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0cmFjay1saXN0LWNvbnRhaW5lcic+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RyYWNrLWxpc3QtaGVhZGVycyc+XG5cdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHQ8cD4jPC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdDxwPlNvbmc8L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0PHA+QWxidW08L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0PHA+VGltZTwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RyYWNrLWxpc3QtYm9keSc+XG5cdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy50cmFja3MubWFwKHRyYWNrID0+XG5cdFx0XHRcdFx0XHRcdDxUcmFjayBcblx0XHRcdFx0XHRcdFx0XHRrZXk9e3ROdW0rK31cblx0XHRcdFx0XHRcdFx0XHRudW09e3ROdW19ICBcblx0XHRcdFx0XHRcdFx0XHRuYW1lPXt0cmFjay5uYW1lfVxuXHRcdFx0XHRcdFx0XHRcdHNvbmdQYXRoPXt0cmFjay5sb2NhdGlvbn0gXG5cdFx0XHRcdFx0XHRcdFx0YWxidW09e3RyYWNrLmFsYnVtfSBcblx0XHRcdFx0XHRcdFx0XHR0aW1lPXt0cmFjay50aW1lfVxuXHRcdFx0XHRcdFx0XHRcdGlzUGxheWluZz17dGhpcy5zdGF0ZS5wbGF5aW5nfVxuXHRcdFx0XHRcdFx0XHRcdHNlbGVjdGVkU29uZz17dGhpcy5zdGF0ZS5zb25nfSBcblx0XHRcdFx0XHRcdFx0XHRoYW5kbGVUb2dnbGVQbGF5PXt0aGlzLnRvZ2dsZVBsYXkuYmluZCh0aGlzLCB0cmFjayl9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8V2F2ZXN1cmZlclxuXHRcdFx0XHRcdGF1ZGlvRmlsZT17dGhpcy5zdGF0ZS5zb25nfVxuXHRcdFx0XHRcdHBvcz17dGhpcy5zdGF0ZS5wb3N9XG5cdFx0XHRcdFx0b25Qb3NDaGFuZ2U9e3RoaXMuaGFuZGxlUG9zQ2hhbmdlfVxuXHRcdFx0XHRcdHBsYXlpbmc9e3RoaXMuc3RhdGUucGxheWluZ31cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9jb21wb25lbnRzL3Byb2ZpbGUvcGxheWVyL1BsYXllci5qc3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBRUE7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQVRBO0FBVUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQWJBO0FBa0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQURBO0FBREE7QUFuQkE7QUFvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBdkNBO0FBK0NBOzs7O0FBOUVBO0FBQ0E7QUFnRkEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})