"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ListaCategoriasConvenios = function () {
    function ListaCategoriasConvenios() {
        _classCallCheck(this, ListaCategoriasConvenios);

        this._categorias = [];
    }

    _createClass(ListaCategoriasConvenios, [{
        key: "adiciona",
        value: function adiciona(categoria) {

            this._categorias.push(categoria);
        }
    }, {
        key: "categorias",
        set: function set(categorias) {

            if (Array.isArray(categorias)) this._categorias = categorias;
        },
        get: function get() {

            return [].concat(this._categorias);
        }
    }]);

    return ListaCategoriasConvenios;
}();
//# sourceMappingURL=ListaCategoriasConvenios.js.map