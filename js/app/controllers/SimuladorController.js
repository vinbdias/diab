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
        this._botaoEnviar = $('#botaoEnviarSimulador');
        this._spanTextoDescubra = $('#spanTextoDescubra');
        this._spanTextoInforme = $('#spanTextoInforme');
        this._divCamposSimulador = $('#camposSimulador');
        this._divResultadoSimulador = $('#resultadoSimuladorView');

        this._capturarClickBotao();

        this._capturarKeyUpInputs();

        this._simulador = new Simulador();

        this._resultadoSimulador = new Bind(new ResultadoSimulador(), new ResultadoSimuladorView($('#resultadoSimuladorView')), 'resultado');
    }

    _createClass(SimuladorController, [{
        key: '_capturarKeyUpInputs',
        value: function _capturarKeyUpInputs() {
            var _this = this;

            this._inputComprasInternet.on('keyup', function (e) {
                return _this._formatarValorComprasInternet(e);
            });

            this._inputCustosEducacao.on('keyup', function (e) {
                return _this._formatarValorCustosEducacao(e);
            });

            this._inputCustosFarmacia.on('keyup', function (e) {
                return _this._formatarValorCustosFarmacia(e);
            });

            this._inputCustosLazer.on('keyup', function (e) {
                return _this._formatarValorCustosLazer(e);
            });
        }
    }, {
        key: '_capturarClickBotao',
        value: function _capturarClickBotao() {
            var _this2 = this;

            this._botaoEnviar.on('click', function (e) {

                e.preventDefault();

                _this2._calcularEconomia();
                _this2._esconderInputsExibirResultado();
            });
        }
    }, {
        key: '_formatarValorComprasInternet',
        value: function _formatarValorComprasInternet(event) {

            event.preventDefault();

            this._inputComprasInternet.val(NumeroHelper.formatarFloatToBRL(this._inputComprasInternet.val()));
        }
    }, {
        key: '_formatarValorCustosEducacao',
        value: function _formatarValorCustosEducacao(event) {

            event.preventDefault();

            this._inputCustosEducacao.val(NumeroHelper.formatarFloatToBRL(this._inputCustosEducacao.val()));
        }
    }, {
        key: '_formatarValorCustosFarmacia',
        value: function _formatarValorCustosFarmacia(event) {

            event.preventDefault();

            this._inputCustosFarmacia.val(NumeroHelper.formatarFloatToBRL(this._inputCustosFarmacia.val()));
        }
    }, {
        key: '_formatarValorCustosLazer',
        value: function _formatarValorCustosLazer(event) {

            event.preventDefault();

            this._inputCustosLazer.val(NumeroHelper.formatarFloatToBRL(this._inputCustosLazer.val()));
        }
    }, {
        key: '_calcularEconomia',
        value: function _calcularEconomia() {

            this._resultadoSimulador.resultado = this._simulador.calcularEconomia(NumeroHelper.parseBRLToFloat(this._inputComprasInternet.val()), NumeroHelper.parseBRLToFloat(this._inputCustosEducacao.val()), NumeroHelper.parseBRLToFloat(this._inputCustosFarmacia.val()), NumeroHelper.parseBRLToFloat(this._inputCustosLazer.val()));
        }
    }, {
        key: '_esconderInputsExibirResultado',
        value: function _esconderInputsExibirResultado() {
            var _this3 = this;

            this._divCamposSimulador.fadeOut(1000);
            this._botaoEnviar.fadeOut(1000);
            this._spanTextoDescubra.fadeOut(1000);
            this._spanTextoInforme.fadeOut(1000, function () {
                return _this3._divResultadoSimulador.fadeIn(1500);
            });
        }
    }]);

    return SimuladorController;
}();
//# sourceMappingURL=SimuladorController.js.map