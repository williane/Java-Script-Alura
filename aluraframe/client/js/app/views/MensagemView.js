'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mensagemView = function (_View) {
    _inherits(mensagemView, _View);

    function mensagemView(elemento) {
        _classCallCheck(this, mensagemView);

        return _possibleConstructorReturn(this, (mensagemView.__proto__ || Object.getPrototypeOf(mensagemView)).call(this, elemento));
    }

    _createClass(mensagemView, [{
        key: '_template',
        value: function _template(model) {
            if (model.texto) {
                $('#mensagemView').show();
                return model.texto + '\n                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n                            <span aria-hidden="true">&times;</span>\n                        </button>';
            }

            return '<p></p>';
        }
    }]);

    return mensagemView;
}(View);
//# sourceMappingURL=MensagemView.js.map