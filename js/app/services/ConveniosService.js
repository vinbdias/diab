'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ConveniosService = function (_HttpService) {
    _inherits(ConveniosService, _HttpService);

    function ConveniosService() {
        _classCallCheck(this, ConveniosService);

        return _possibleConstructorReturn(this, (ConveniosService.__proto__ || Object.getPrototypeOf(ConveniosService)).apply(this, arguments));
    }

    _createClass(ConveniosService, [{
        key: 'obterCategorias',
        value: function obterCategorias() {
            var _this2 = this;

            return new Promise(function (resolve, reject) {

                _this2.get('https://www.anajustra.org.br/api/diab/getCategoriasConvenios.php').then(function (categorias) {
                    return resolve(categorias);
                }).catch(function () {
                    return reject('Não foi possível obter as categorias de convênios.');
                });
            });
        }
    }, {
        key: 'obterConveniosPorCategoria',
        value: function obterConveniosPorCategoria(categoriaId) {
            var _this3 = this;

            return new Promise(function (resolve, reject) {

                _this3.get('https://www.anajustra.org.br/api/diab/getConveniosCategoria.php?categoriaId=' + categoriaId).then(function (convenios) {
                    return resolve(convenios);
                }).catch(function () {
                    return reject('Não foi possível obter os convênios da categoria.');
                });
            });
        }
    }, {
        key: 'obterConvenio',
        value: function obterConvenio(convenioId) {
            var _this4 = this;

            return new Promise(function (resolve, reject) {

                _this4.get('https://www.anajustra.org.br/api/diab/getConvenio.php?convenioId=' + convenioId).then(function (convenio) {
                    return resolve(convenio);
                }).catch(function () {
                    return reject('Não foi possível obter o convênio.');
                });
            });
        }
    }]);

    return ConveniosService;
}(HttpService);
//# sourceMappingURL=ConveniosService.js.map