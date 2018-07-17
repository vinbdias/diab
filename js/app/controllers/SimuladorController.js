'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SimuladorController = function () {
    function SimuladorController() {
        _classCallCheck(this, SimuladorController);

        this._inputComprasInternet = $('#comprasInternet');
        this._inputCustosEducacao = $('#custosEducacao');
        this._inputCustosFarmacia = $('#custosFarmacia');
        this._inputCustosLazer = $('#custosLazer');

        this._simulador = new Simulador();

        this._resultadoSimulador = new Bind(new ResultadoSimulador(), new ResultadoSimuladorView($('#resultadoSimuladorView')), 'resultado');
    }

    _createClass(SimuladorController, [{
        key: 'formatarValorComprasInternet',
        value: function formatarValorComprasInternet(event) {

            event.preventDefault();

            this._inputComprasInternet.val(NumeroHelper.formatarFloatToBRL(this._inputComprasInternet.val()));
        }
    }, {
        key: 'formatarValorCustosEducacao',
        value: function formatarValorCustosEducacao(event) {

            event.preventDefault();

            this._inputCustosEducacao.val(NumeroHelper.formatarFloatToBRL(this._inputCustosEducacao.val()));
        }
    }, {
        key: 'formatarValorCustosFarmacia',
        value: function formatarValorCustosFarmacia(event) {

            event.preventDefault();

            this._inputCustosFarmacia.val(NumeroHelper.formatarFloatToBRL(this._inputCustosFarmacia.val()));
        }
    }, {
        key: 'formatarValorCustosLazer',
        value: function formatarValorCustosLazer(event) {

            event.preventDefault();

            this._inputCustosLazer.val(NumeroHelper.formatarFloatToBRL(this._inputCustosLazer.val()));
        }
    }, {
        key: 'calcularEconomia',
        value: function calcularEconomia(event) {

            event.preventDefault();

            this._resultadoSimulador.resultado = this._simulador.calcularEconomia(NumeroHelper.parseBRLToFloat(this._inputComprasInternet.val()), NumeroHelper.parseBRLToFloat(this._inputCustosEducacao.val()), NumeroHelper.parseBRLToFloat(this._inputCustosFarmacia.val()), NumeroHelper.parseBRLToFloat(this._inputCustosLazer.val()));
        }
    }]);

    return SimuladorController;
}();
//# sourceMappingURL=SimuladorController.js.map