'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //var React = require('react');


var jsdiff = require('diff');
//var PropTypes = require('prop-types');

var fnMap = {
    'chars': jsdiff.diffChars,
    'words': jsdiff.diffWords,
    'sentences': jsdiff.diffSentences,
    'json': jsdiff.diffJson
};

var Diff = function (_React$Component) {
    _inherits(Diff, _React$Component);

    function Diff() {
        _classCallCheck(this, Diff);

        return _possibleConstructorReturn(this, (Diff.__proto__ || Object.getPrototypeOf(Diff)).apply(this, arguments));
    }

    _createClass(Diff, [{
        key: 'render',
        value: function render() {
            var diff = fnMap[this.props.type](this.props.inputA, this.props.inputB);
            var result = diff.map(function (part, index) {
                var spanStyle = {
                    backgroundColor: part.added ? 'lightgreen' : part.removed ? 'salmon' : 'lightgrey'
                };
                return _react2.default.createElement(
                    'span',
                    { key: index, style: spanStyle },
                    part.value
                );
            });
            return _react2.default.createElement(
                'pre',
                { className: 'diff-result' },
                result
            );
        }
    }]);

    return Diff;
}(_react2.default.Component);

Diff.propTypes = {
    inputA: _propTypes2.default.string,
    inputB: _propTypes2.default.string,
    type: _propTypes2.default.string
};

Diff.defaultProps = {
    inputA: '',
    inputB: '',
    type: 'chars'
};

exports.default = Diff;
