webpackHotUpdate(0,{

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(11);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactWavesurfer = __webpack_require__(185);\n\nvar _reactWavesurfer2 = _interopRequireDefault(_reactWavesurfer);\n\n__webpack_require__(199);\n\nvar _Track = __webpack_require__(92);\n\nvar _Track2 = _interopRequireDefault(_Track);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Player = function (_React$Component) {\n\t_inherits(Player, _React$Component);\n\n\tfunction Player(props) {\n\t\t_classCallCheck(this, Player);\n\n\t\treturn _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, props));\n\t}\n\n\t_createClass(Player, [{\n\t\tkey: 'handlePosChange',\n\t\tvalue: function handlePosChange(e) {\n\t\t\tthis.setState({\n\t\t\t\tpos: e.originalArgs[0]\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _this2 = this;\n\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'player-container' },\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'h2',\n\t\t\t\t\tnull,\n\t\t\t\t\t'Top Tracks'\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'track-list-container' },\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'track-list-headers' },\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'p',\n\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t'#'\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'p',\n\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t'Song'\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'p',\n\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t'Album'\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'p',\n\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t'Time'\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t)\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'track-list-body' },\n\t\t\t\t\t\tthis.props.tracks.map(function (track) {\n\t\t\t\t\t\t\treturn _react2.default.createElement(_Track2.default, {\n\t\t\t\t\t\t\t\tkey: track.num,\n\t\t\t\t\t\t\t\tnum: track.num,\n\t\t\t\t\t\t\t\tname: track.name,\n\t\t\t\t\t\t\t\tsongPath: track.songPath,\n\t\t\t\t\t\t\t\talbum: track.album,\n\t\t\t\t\t\t\t\ttime: track.time,\n\t\t\t\t\t\t\t\thandleTogglePlay: _this2.handleTogglePlay.bind(_this2)\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t})\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(_reactWavesurfer2.default, {\n\t\t\t\t\taudioFile: this.props.player.song,\n\t\t\t\t\tpos: this.props.player.pos,\n\t\t\t\t\tonPosChange: this.handlePosChange,\n\t\t\t\t\tplaying: this.props.player.playing\n\t\t\t\t})\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn Player;\n}(_react2.default.Component);\n\nexports.default = Player;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wbGF5ZXIvUGxheWVyLmpzeD8xYmU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBXYXZlc3VyZmVyIGZyb20gJ3JlYWN0LXdhdmVzdXJmZXInXG5cbmltcG9ydCAnLi4vLi4vLi4vc3RhdGljL3N0eWxlcy9jb21wb25lbnRzL3Byb2ZpbGUvcGxheWVyJ1xuaW1wb3J0IFRyYWNrIGZyb20gJy4vVHJhY2snXG5cblxuY2xhc3MgUGxheWVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0fVxuXG5cdGhhbmRsZVBvc0NoYW5nZShlKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRwb3M6IGUub3JpZ2luYWxBcmdzWzBdXG5cdFx0fSlcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3BsYXllci1jb250YWluZXInPlxuXHRcdFx0XHQ8aDI+VG9wIFRyYWNrczwvaDI+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RyYWNrLWxpc3QtY29udGFpbmVyJz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndHJhY2stbGlzdC1oZWFkZXJzJz5cblx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdDxwPiM8L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0PHA+U29uZzwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHQ8cD5BbGJ1bTwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHQ8cD5UaW1lPC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndHJhY2stbGlzdC1ib2R5Jz5cblx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLnRyYWNrcy5tYXAodHJhY2sgPT5cblx0XHRcdFx0XHRcdFx0PFRyYWNrIFxuXHRcdFx0XHRcdFx0XHRcdGtleT17dHJhY2subnVtfSBcblx0XHRcdFx0XHRcdFx0XHRudW09e3RyYWNrLm51bX0gXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT17dHJhY2submFtZX1cblx0XHRcdFx0XHRcdFx0XHRzb25nUGF0aD17dHJhY2suc29uZ1BhdGh9IFxuXHRcdFx0XHRcdFx0XHRcdGFsYnVtPXt0cmFjay5hbGJ1bX0gXG5cdFx0XHRcdFx0XHRcdFx0dGltZT17dHJhY2sudGltZX0gXG5cdFx0XHRcdFx0XHRcdFx0aGFuZGxlVG9nZ2xlUGxheT17dGhpcy5oYW5kbGVUb2dnbGVQbGF5LmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8V2F2ZXN1cmZlclxuXHRcdFx0XHRcdGF1ZGlvRmlsZT17dGhpcy5wcm9wcy5wbGF5ZXIuc29uZ31cblx0XHRcdFx0XHRwb3M9e3RoaXMucHJvcHMucGxheWVyLnBvc31cblx0XHRcdFx0XHRvblBvc0NoYW5nZT17dGhpcy5oYW5kbGVQb3NDaGFuZ2V9XG5cdFx0XHRcdFx0cGxheWluZz17dGhpcy5wcm9wcy5wbGF5ZXIucGxheWluZ31cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9jb21wb25lbnRzL3Byb2ZpbGUvcGxheWVyL1BsYXllci5qc3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBRUE7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQWJBO0FBa0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBREE7QUFEQTtBQW5CQTtBQWtDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFyQ0E7QUE2Q0E7Ozs7QUEzREE7QUFDQTtBQTZEQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})