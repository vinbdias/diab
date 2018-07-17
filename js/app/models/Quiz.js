"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Quiz = function () {
    function Quiz() {
        _classCallCheck(this, Quiz);

        this._respostas = [];
    }

    _createClass(Quiz, [{
        key: "calcularResultadoQuiz",
        value: function calcularResultadoQuiz(respostas) {

            this._respostas = respostas;

            var pontuacao = this._calcularPontuacao();

            var resultadoQuiz = {

                pontuacao: pontuacao
            };

            if (pontuacao >= 90) {

                resultadoQuiz.perfil = this._perfis.find(function (perfil) {

                    return perfil.indice == 90;
                });
            }

            if (pontuacao >= 60 && pontuacao < 90) {

                resultadoQuiz.perfil = this._perfis.find(function (perfil) {

                    return perfil.indice == 60;
                });
            }

            if (pontuacao < 60) {

                resultadoQuiz.perfil = this._perfis.find(function (perfil) {

                    return perfil.indice == 30;
                });
            }

            return resultadoQuiz;
        }
    }, {
        key: "_calcularPontuacao",
        value: function _calcularPontuacao(respostas) {
            var _this = this;

            var valores = [];
            this._respostas.forEach(function (rotuloResposta, indice) {

                var opcaoResposta = _this._perguntas[indice].opcoes.find(function (opcao) {

                    return opcao.rotulo == rotuloResposta;
                });

                valores.push(opcaoResposta.valor);
            });

            return valores.reduce(function (acumulador, valor) {
                return acumulador + valor;
            });
        }
    }, {
        key: "getPerguntas",
        value: function getPerguntas() {

            return PerguntasDataSource.getPerguntas();
        }
    }, {
        key: "getPerfis",
        value: function getPerfis() {

            return PerfisDataSource.getPerfis();
        }
    }, {
        key: "perguntas",
        set: function set(perguntas) {

            this._perguntas = perguntas;
        },
        get: function get() {

            return this._perguntas;
        }
    }, {
        key: "perfis",
        set: function set(perfis) {

            this._perfis = perfis;
        },
        get: function get() {

            return this._perfis;
        }
    }, {
        key: "respostas",
        get: function get() {

            return this._respostas;
        },
        set: function set(respostas) {

            this._respostas = [].concat(respostas);
        }
    }]);

    return Quiz;
}();
//# sourceMappingURL=Quiz.js.map