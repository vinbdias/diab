"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CategoriasConvenios = function () {
    function CategoriasConvenios() {
        _classCallCheck(this, CategoriasConvenios);
    }

    _createClass(CategoriasConvenios, null, [{
        key: "getCategorias",
        value: function getCategorias() {

            return [{
                "ID": "13",
                "CATEGORIA": "Compras online",
                "ICON": "fa-shopping-cart"
            }, {
                "ID": "5",
                "CATEGORIA": "Educação",
                "ICON": "fa-graduation-cap"
            }, {
                "ID": "4",
                "CATEGORIA": "Saúde",
                "ICON": "fa-heartbeat"
            }, {
                "ID": "6",
                "CATEGORIA": "Serviços",
                "ICON": "fa-cogs"
            }, {
                "ID": "11",
                "CATEGORIA": "Turismo e Lazer",
                "ICON": "fa-plane"
            }, {
                "ID": "26",
                "CATEGORIA": "Veículos",
                "ICON": "fa-car"
            }];
        }
    }]);

    return CategoriasConvenios;
}();
//# sourceMappingURL=CategoriasConvenios.js.map