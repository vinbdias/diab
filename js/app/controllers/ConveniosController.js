'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ConveniosController = function () {
    function ConveniosController() {
        _classCallCheck(this, ConveniosController);

        this._categoriaConvenio = new CategoriaConvenio();

        this._conveniosService = new ConveniosService();

        this._listaConvenios = new Bind(new ListaConvenios(), new ConveniosView($('#conveniosView')), 'convenios');

        this._convenio = new Bind(new Convenio(), new ConvenioView($('#convenioView')), 'convenio');

        this._tituloCategoriaListaConvenios = $('#tituloCategoriaListaConvenios');

        this._capturarClickCategoria();

        this._capturarClickBotaoVoltarParaCategorias();
    }

    _createClass(ConveniosController, [{
        key: 'reset',
        value: function reset() {

            this._convenio.convenio = undefined;
            this._listaConvenios.convenios = [];
            this._tituloCategoriaListaConvenios.html('');
        }
    }, {
        key: '_capturarClickCategoria',
        value: function _capturarClickCategoria() {

            var acaoClickCategoria = this._listarConveniosPorCategoria.bind(this);
            $('.linkCategoria').each(function () {
                var _this = this;

                $(this).on('click', function () {
                    return acaoClickCategoria($(_this).data('categoria'));
                });
            });
        }
    }, {
        key: '_capturarClickConvenio',
        value: function _capturarClickConvenio() {

            var acaoClickConvenio = this._mostrarConvenio.bind(this);
            $('.linkConvenio').each(function () {
                var _this2 = this;

                $(this).on('click', function () {
                    return acaoClickConvenio($(_this2).data('convenio'));
                });
            });
        }
    }, {
        key: '_capturarClickBotaoVoltarParaCategorias',
        value: function _capturarClickBotaoVoltarParaCategorias() {
            var _this3 = this;

            $('#botaoVoltarParaCategorias').on('click', function () {
                return _this3._listaConvenios.convenios = [];
            });
        }
    }, {
        key: '_capturarClickBotaoVoltarParaConvenios',
        value: function _capturarClickBotaoVoltarParaConvenios() {
            var _this4 = this;

            $('#botaoVoltarParaConvenios').on('click', function () {
                return _this4._convenio.convenio = undefined;
            });
        }
    }, {
        key: '_listarConveniosPorCategoria',
        value: function _listarConveniosPorCategoria(categoriaId) {

            this._listaConvenios.convenios = [];
            this._convenio.convenio = undefined;

            this._listaConvenios.convenios = this._convenio.getConveniosPorCategoriaId(categoriaId);

            this._tituloCategoriaListaConvenios.html(this._categoriaConvenio.getCategoriaPorId(categoriaId).CATEGORIA);

            this._capturarClickConvenio();
        }
    }, {
        key: '_mostrarConvenio',
        value: function _mostrarConvenio(convenioId) {

            this._convenio.convenio = this._convenio.getConvenioPorId(convenioId);

            this._conveniosService.gravarAcessoConvenio(convenioId);

            this._capturarClickBotaoVoltarParaConvenios();
        }
    }]);

    return ConveniosController;
}();
//# sourceMappingURL=ConveniosController.js.map