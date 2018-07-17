'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ConveniosController = function () {
    function ConveniosController() {
        _classCallCheck(this, ConveniosController);

        this._categoriaConvenio = new CategoriaConvenio();
        this._listaCategoriasConvenios = new ListaCategoriasConvenios();
        this._categoriasConveniosView = new CategoriasConveniosView($('#categoriasConveniosView'));

        this._listaCategoriasConvenios = new Bind(new ListaCategoriasConvenios(), new CategoriasConveniosView($('#categoriasConveniosView')), 'categorias');

        this._listaConvenios = new Bind(new ListaConvenios(), new ConveniosView($('#conveniosView')), 'convenios');

        this._listaCategoriasConvenios.categorias = this._categoriaConvenio.getCategorias();

        this._convenio = new Bind(new Convenio(), new ConvenioView($('#convenioView')), 'convenio');
    }

    _createClass(ConveniosController, [{
        key: 'listarConveniosPorCategoria',
        value: function listarConveniosPorCategoria(categoriaId) {

            this._listaConvenios.convenios = [];
            this._convenio.convenio = undefined;

            this._listaConvenios.convenios = this._convenio.getConveniosPorCategoriaId(categoriaId);
        }
    }, {
        key: 'mostrarConvenio',
        value: function mostrarConvenio(convenioId) {

            this._convenio.convenio = this._convenio.getConvenioPorId(convenioId);
        }
    }]);

    return ConveniosController;
}();
//# sourceMappingURL=ConveniosController.js.map