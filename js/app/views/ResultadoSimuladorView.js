'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResultadoSimuladorView = function (_View) {
    _inherits(ResultadoSimuladorView, _View);

    function ResultadoSimuladorView() {
        _classCallCheck(this, ResultadoSimuladorView);

        return _possibleConstructorReturn(this, (ResultadoSimuladorView.__proto__ || Object.getPrototypeOf(ResultadoSimuladorView)).apply(this, arguments));
    }

    _createClass(ResultadoSimuladorView, [{
        key: 'template',
        value: function template(modelo) {

            return modelo.resultado !== undefined ? '\n        <div class="col-md-6 text-right">\n            <p>Seus gastos mensais:</p>\n            <p class="gasto_mes">' + modelo.resultado.totalCustos.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + '</p>\n            <br/>\n            <p>Quanto voc\xEA gastaria usando<br/>a rede conveniada ANAJUSTRA:</p>\n            <p class="desc_ansjt">' + modelo.resultado.totalCustosDesconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + '</p>\n        </div>\n        <div class="col-md-6">\n            <div class="triangulo text-center">\n                Economia de<br/>\n                <span>' + modelo.resultado.totalDesconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + '</span> por m\xEAs<br/>\n                e <span>' + (modelo.resultado.totalDesconto * 12).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + '</span> por ano\n            </div>\n        </div>\n        <p style="font-size:18px;margin-top:530px">* Para efeito de simula\xE7\xE3o foram considerados os descontos m\xE9dios em cada categoria. Os descontos devem ser aplicados conforme divulgados no site da ANAJUSTRA.</p>                            \n        ' : '';
        }
    }]);

    return ResultadoSimuladorView;
}(View);
//# sourceMappingURL=ResultadoSimuladorView.js.map