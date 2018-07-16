'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ConveniosController = function () {
    function ConveniosController() {
        var _this = this;

        _classCallCheck(this, ConveniosController);

        this._conveniosService = new ConveniosService();

        this._listaCategoriasConvenios = new ListaCategoriasConvenios();
        this._categoriasConveniosView = new CategoriasConveniosView($('#categoriasConveniosView'));

        this._listaCategoriasConvenios = new Bind(new ListaCategoriasConvenios(), new CategoriasConveniosView($('#categoriasConveniosView')), 'adiciona');

        this._listaConvenios = new Bind(new ListaConvenios(), new ConveniosView($('#conveniosView')), 'adiciona', 'limpa');

        this._conveniosService.obterCategorias().then(function (categorias) {
            return categorias.forEach(function (categoria) {
                return _this._listaCategoriasConvenios.adiciona(categoria);
            });
        });

        this._convenio = {};
    }

    _createClass(ConveniosController, [{
        key: 'listarConveniosPorCategoria',
        value: function listarConveniosPorCategoria(categoriaId) {
            var _this2 = this;

            this._conveniosService.obterConveniosPorCategoria(categoriaId).then(function (convenios) {

                _this2._listaConvenios.limpa();
                convenios.forEach(function (convenio) {
                    return _this2._listaConvenios.adiciona(convenio);
                });
            });
        }
    }, {
        key: 'mostrarConvenio',
        value: function mostrarConvenio(convenioId) {
            var _this3 = this;

            this._conveniosService.obterConvenio(convenioId).then(function (convenio) {

                _this3._convenio = convenio;
                _this3._convenioView.update(convenio);
            });
        }
    }]);

    return ConveniosController;
}();
//# sourceMappingURL=ConveniosController.js.map