'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SimuladorController = function () {
    function SimuladorController() {
        _classCallCheck(this, SimuladorController);

        var $ = document.querySelector.bind(document);

        this._inputComprasInternet = $('#comprasInternet');
        this._inputCustosEducacao = $('#custosEducacao');
        this._inputCustosFarmacia = $('#custosFarmacia');
        this._inputCustosLazer = $('#custosLazer');
    }

    _createClass(SimuladorController, [{
        key: 'formatarValorComprasInternet',
        value: function formatarValorComprasInternet(event) {

            event.preventDefault();

            this._inputComprasInternet.value = NumeroHelper.formatarMoeda(this._inputComprasInternet.value);
        }
    }, {
        key: 'formatarValorCustosEducacao',
        value: function formatarValorCustosEducacao(event) {

            event.preventDefault();

            this._inputCustosEducacao.value = NumeroHelper.formatarMoeda(this._inputCustosEducacao.value);
        }
    }, {
        key: 'formatarValorCustosFarmacia',
        value: function formatarValorCustosFarmacia(event) {

            event.preventDefault();

            this._inputCustosFarmacia.value = NumeroHelper.formatarMoeda(this._inputCustosFarmacia.value);
        }
    }, {
        key: 'formatarValorCustosLazer',
        value: function formatarValorCustosLazer(event) {

            event.preventDefault();

            this._inputCustosLazer.value = NumeroHelper.formatarMoeda(this._inputCustosLazer.value);
        }
    }]);

    return SimuladorController;
}();
//# sourceMappingURL=SimuladorController.js.map