"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Simulador = function () {
        function Simulador() {
                _classCallCheck(this, Simulador);

                this._descontoLazer = 0.1538;
                this._descontoComprasInternet = 0.1565;
                this._descontoEducacao = 0.1770;
                this._descontoFarmacia = 0.15;
        }

        _createClass(Simulador, [{
                key: "calcularEconomia",
                value: function calcularEconomia(comprasInternet, custosEducacao, custosFarmacia, custosLazer) {

                        var totalCustos = comprasInternet + custosEducacao + custosFarmacia + custosLazer;

                        var valorDescontoComprasInternet = comprasInternet * this._descontoComprasInternet;
                        var economiaComprasInternet = comprasInternet - valorDescontoComprasInternet;

                        var valorDescontoEducacao = custosEducacao * this._descontoEducacao;
                        var economiaEducacao = custosEducacao - valorDescontoEducacao;

                        var valorDescontoFarmacia = custosFarmacia * this._descontoFarmacia;
                        var economiaFarmacia = custosFarmacia - valorDescontoFarmacia;

                        var valorDescontoLazer = custosLazer * this._descontoLazer.calcularEconomia;
                        var economiaLazer = custosLazer - valorDescontoLazer;

                        var economiaTotal = totalCustos - economiaComprasInternet + economiaEducacao + economiaFarmacia + economiaLazer;

                        return {

                                totalCustos: totalCustos,

                                valorDescontoComprasInternet: valorDescontoComprasInternet,
                                economiaComprasInternet: economiaComprasInternet,

                                valorDescontoEducacao: valorDescontoEducacao,
                                economiaEducacao: economiaEducacao,

                                valorDescontoFarmacia: valorDescontoFarmacia,
                                economiaFarmacia: economiaFarmacia,

                                valorDescontoLazer: valorDescontoLazer,
                                economiaLazer: economiaLazer
                        };
                }
        }]);

        return Simulador;
}();
//# sourceMappingURL=Simulador.js.map