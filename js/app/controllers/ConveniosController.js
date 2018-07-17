'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ConveniosController = function () {
    function ConveniosController() {
        var _this = this;

        _classCallCheck(this, ConveniosController);

        this._listaCategoriasConvenios = new ListaCategoriasConvenios();
        this._categoriasConveniosView = new CategoriasConveniosView($('#categoriasConveniosView'));

        this._listaCategoriasConvenios = new Bind(new ListaCategoriasConvenios(), new CategoriasConveniosView($('#categoriasConveniosView')), 'adiciona');

        this._listaConvenios = new Bind(new ListaConvenios(), new ConveniosView($('#conveniosView')), 'adiciona', 'limpa');

        CategoriasConvenios.getCategorias().forEach(function (categoria) {
            return _this._listaCategoriasConvenios.adiciona(categoria);
        });

        this._convenio = new Bind(new Convenio(), new ConvenioView($('#convenioView')), 'convenio');
    }

    _createClass(ConveniosController, [{
        key: 'listarConveniosPorCategoria',
        value: function listarConveniosPorCategoria(categoriaId) {
            var _this2 = this;

            this._listaConvenios.limpa();
            this._convenio.limpa();

            Convenios.getConvenios().forEach(function (convenio) {
                return convenio.CATEGORIAS.indexOf(categoriaId.toString()) !== -1 ? _this2._listaConvenios.adiciona(convenio) : false;
            });
        }
    }, {
        key: 'mostrarConvenio',
        value: function mostrarConvenio(convenioId) {

            this._convenio.convenio = Convenios.getConvenios().find(function (convenio) {
                return convenio.ID == convenioId;
            });
        }
    }]);

    return ConveniosController;
}();
//# sourceMappingURL=ConveniosController.js.map