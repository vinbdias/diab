'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CategoriasConveniosView = function (_View) {
    _inherits(CategoriasConveniosView, _View);

    function CategoriasConveniosView() {
        _classCallCheck(this, CategoriasConveniosView);

        return _possibleConstructorReturn(this, (CategoriasConveniosView.__proto__ || Object.getPrototypeOf(CategoriasConveniosView)).apply(this, arguments));
    }

    _createClass(CategoriasConveniosView, [{
        key: 'template',
        value: function template(model) {

            return '\n            <ul>\n                ' + model.categorias.map(function (categoria) {
                return '\n                <li class="categoriasConveniosItem" id="convenioCategoria' + StringHelper.ucWordsSanitizeRemoverEspacosEmBranco(categoria.CATEGORIA) + '" onclick="conveniosController.listarConveniosPorCategoria(' + categoria.ID + ')">' + categoria.CATEGORIA + '</li>\n                ';
            }).join('') + '\n            </ul>\n        ';
        }
    }]);

    return CategoriasConveniosView;
}(View);
//# sourceMappingURL=CategoriasConveniosView.js.map