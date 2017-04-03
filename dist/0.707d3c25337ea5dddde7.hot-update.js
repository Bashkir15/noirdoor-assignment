webpackHotUpdate(0,{

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(11);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactWavesurfer = __webpack_require__(185);\n\nvar _reactWavesurfer2 = _interopRequireDefault(_reactWavesurfer);\n\n__webpack_require__(199);\n\nvar _Track = __webpack_require__(92);\n\nvar _Track2 = _interopRequireDefault(_Track);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar tracks = [{\n\tnum: '1',\n\tname: 'Test',\n\talbum: 'Stuff',\n\ttime: '4:30',\n\t//location: 'app/static/music/DIAD1116.mp3'\n\tsongPath: 'http://wavesurfer-js.org/example/media/demo.mp3'\n}, {\n\tnum: '2',\n\tname: 'Test2',\n\talbum: 'Blah',\n\ttime: '2:30',\n\tsongPath: 'app/static/music/MER11082p.mp3'\n}, {\n\tnum: '3',\n\tname: 'Test3',\n\talbum: 'Grr',\n\ttime: '1:13',\n\tsongPath: 'app/static/music/MER11082p.mp3'\n}];\n\nvar Player = function (_React$Component) {\n\t_inherits(Player, _React$Component);\n\n\tfunction Player(props) {\n\t\t_classCallCheck(this, Player);\n\n\t\tvar _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, props));\n\n\t\t_this.state = {\n\t\t\tplaying: false,\n\t\t\tsong: null,\n\t\t\tpos: 0\n\t\t};\n\n\t\t_this.handleTogglePlay = _this.handleTogglePlay.bind(_this);\n\t\treturn _this;\n\t}\n\n\t_createClass(Player, [{\n\t\tkey: 'handleTogglePlay',\n\t\tvalue: function handleTogglePlay(path) {\n\t\t\tconsole.log(path);\n\t\t\tthis.setState({\n\t\t\t\tplaying: !this.state.playing,\n\t\t\t\tsong: path\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'handlePosChange',\n\t\tvalue: function handlePosChange(e) {\n\t\t\tthis.setState({\n\t\t\t\tpos: e.originalArgs[0]\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _this2 = this;\n\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'player-container' },\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'h2',\n\t\t\t\t\tnull,\n\t\t\t\t\t'Top Tracks'\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'track-list-container' },\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'track-list-headers' },\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'p',\n\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t'#'\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'p',\n\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t'Song'\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'p',\n\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t'Album'\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'p',\n\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t'Time'\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t)\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'track-list-body' },\n\t\t\t\t\t\ttracks.map(function (track) {\n\t\t\t\t\t\t\treturn _react2.default.createElement(_Track2.default, {\n\t\t\t\t\t\t\t\tkey: track.num,\n\t\t\t\t\t\t\t\tnum: track.num,\n\t\t\t\t\t\t\t\tname: track.name,\n\t\t\t\t\t\t\t\tsongPath: track.songPath,\n\t\t\t\t\t\t\t\talbum: track.album,\n\t\t\t\t\t\t\t\ttime: track.time,\n\t\t\t\t\t\t\t\thandleTogglePlay: _this2.handleTogglePlay.bind(_this2, location)\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t})\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(_reactWavesurfer2.default, {\n\t\t\t\t\taudioFile: this.state.song,\n\t\t\t\t\tpos: this.state.pos,\n\t\t\t\t\tonPosChange: this.handlePosChange,\n\t\t\t\t\tplaying: this.state.playing\n\t\t\t\t})\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn Player;\n}(_react2.default.Component);\n\nexports.default = Player;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wbGF5ZXIvUGxheWVyLmpzeD8xYmU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBXYXZlc3VyZmVyIGZyb20gJ3JlYWN0LXdhdmVzdXJmZXInXG5cbmltcG9ydCAnLi4vLi4vLi4vc3RhdGljL3N0eWxlcy9jb21wb25lbnRzL3Byb2ZpbGUvcGxheWVyJ1xuaW1wb3J0IFRyYWNrIGZyb20gJy4vVHJhY2snXG5cblxuY29uc3QgdHJhY2tzID0gW1xuXHR7XG5cdFx0bnVtOiAnMScsXG5cdFx0bmFtZTogJ1Rlc3QnLFxuXHRcdGFsYnVtOiAnU3R1ZmYnLFxuXHRcdHRpbWU6ICc0OjMwJyxcblx0XHQvL2xvY2F0aW9uOiAnYXBwL3N0YXRpYy9tdXNpYy9ESUFEMTExNi5tcDMnXG5cdFx0c29uZ1BhdGg6ICdodHRwOi8vd2F2ZXN1cmZlci1qcy5vcmcvZXhhbXBsZS9tZWRpYS9kZW1vLm1wMydcblx0fSxcblxuXHR7XG5cdFx0bnVtOiAnMicsXG5cdFx0bmFtZTogJ1Rlc3QyJyxcblx0XHRhbGJ1bTogJ0JsYWgnLFxuXHRcdHRpbWU6ICcyOjMwJyxcblx0XHRzb25nUGF0aDogJ2FwcC9zdGF0aWMvbXVzaWMvTUVSMTEwODJwLm1wMydcblx0fSxcblxuXHR7XG5cdFx0bnVtOiAnMycsXG5cdFx0bmFtZTogJ1Rlc3QzJyxcblx0XHRhbGJ1bTogJ0dycicsXG5cdFx0dGltZTogJzE6MTMnLFxuXHRcdHNvbmdQYXRoOiAnYXBwL3N0YXRpYy9tdXNpYy9NRVIxMTA4MnAubXAzJ1xuXHR9XG5dO1xuXG5jbGFzcyBQbGF5ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRwbGF5aW5nOiBmYWxzZSxcblx0XHRcdHNvbmc6IG51bGwsXG5cdFx0XHRwb3M6IDBcblx0XHR9O1xuXG5cdFx0dGhpcy5oYW5kbGVUb2dnbGVQbGF5ID0gdGhpcy5oYW5kbGVUb2dnbGVQbGF5LmJpbmQodGhpcyk7XG5cdH1cblxuXHRoYW5kbGVUb2dnbGVQbGF5KHBhdGgpIHtcblx0XHRjb25zb2xlLmxvZyhwYXRoKTtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHBsYXlpbmc6ICF0aGlzLnN0YXRlLnBsYXlpbmcsXG5cdFx0XHRzb25nOiBwYXRoXG5cdFx0fSk7XG5cdH1cblxuXHRoYW5kbGVQb3NDaGFuZ2UoZSkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0cG9zOiBlLm9yaWdpbmFsQXJnc1swXVxuXHRcdH0pXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwbGF5ZXItY29udGFpbmVyJz5cblx0XHRcdFx0PGgyPlRvcCBUcmFja3M8L2gyPlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0cmFjay1saXN0LWNvbnRhaW5lcic+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RyYWNrLWxpc3QtaGVhZGVycyc+XG5cdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHQ8cD4jPC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdDxwPlNvbmc8L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0PHA+QWxidW08L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0PHA+VGltZTwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RyYWNrLWxpc3QtYm9keSc+XG5cdFx0XHRcdFx0XHR7dHJhY2tzLm1hcCh0cmFjayA9PlxuXHRcdFx0XHRcdFx0XHQ8VHJhY2sgXG5cdFx0XHRcdFx0XHRcdFx0a2V5PXt0cmFjay5udW19IFxuXHRcdFx0XHRcdFx0XHRcdG51bT17dHJhY2subnVtfSBcblx0XHRcdFx0XHRcdFx0XHRuYW1lPXt0cmFjay5uYW1lfVxuXHRcdFx0XHRcdFx0XHRcdHNvbmdQYXRoPXt0cmFjay5zb25nUGF0aH0gXG5cdFx0XHRcdFx0XHRcdFx0YWxidW09e3RyYWNrLmFsYnVtfSBcblx0XHRcdFx0XHRcdFx0XHR0aW1lPXt0cmFjay50aW1lfSBcblx0XHRcdFx0XHRcdFx0XHRoYW5kbGVUb2dnbGVQbGF5PXt0aGlzLmhhbmRsZVRvZ2dsZVBsYXkuYmluZCh0aGlzLCBsb2NhdGlvbil9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8V2F2ZXN1cmZlclxuXHRcdFx0XHRcdGF1ZGlvRmlsZT17dGhpcy5zdGF0ZS5zb25nfVxuXHRcdFx0XHRcdHBvcz17dGhpcy5zdGF0ZS5wb3N9XG5cdFx0XHRcdFx0b25Qb3NDaGFuZ2U9e3RoaXMuaGFuZGxlUG9zQ2hhbmdlfVxuXHRcdFx0XHRcdHBsYXlpbmc9e3RoaXMuc3RhdGUucGxheWluZ31cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9jb21wb25lbnRzL3Byb2ZpbGUvcGxheWVyL1BsYXllci5qc3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBUUE7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQVRBO0FBVUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFiQTtBQWtCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQURBO0FBREE7QUFuQkE7QUFrQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBckNBO0FBNkNBOzs7O0FBMUVBO0FBQ0E7QUE0RUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})