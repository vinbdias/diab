"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Perfis = function () {
    function Perfis() {
        _classCallCheck(this, Perfis);
    }

    _createClass(Perfis, null, [{
        key: "getPerfis",
        value: function getPerfis() {

            return [{

                "indice": 90,
                "nomePerfil": "Consumidor Consciente",
                "textoPerfil": "Parabéns! Você é um consumidor consciente."
            }, {

                "indice": 60,
                "nomePerfil": "Consumidor Moderado",
                "textoPerfil": "Você é um consumidor moderado."
            }, {

                "indice": 30,
                "nomePerfil": "Consumidor Imprudente",
                "textoPerfil": "Cuidado! Você é um consumidor imprudente."
            }];
        }
    }]);

    return Perfis;
}();
//# sourceMappingURL=Perfis.js.map