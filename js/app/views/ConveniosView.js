'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ConveniosView = function (_View) {
    _inherits(ConveniosView, _View);

    function ConveniosView() {
        _classCallCheck(this, ConveniosView);

        return _possibleConstructorReturn(this, (ConveniosView.__proto__ || Object.getPrototypeOf(ConveniosView)).apply(this, arguments));
    }

    _createClass(ConveniosView, [{
        key: 'template',
        value: function template(modelo) {

            return '\n        ' + modelo.convenios.map(function (convenio) {
                return '\n        <div class="conv col-md-2"> \n            <div class="gallery_convenios">\n                <a class="et-hero-tab linkConvenio" href="#mostra_convenio" data-convenio="' + convenio.ID + '">\n                    <img src="https://www.anajustra.org.br/img_site/convenios/' + convenio.IMAGEM + '" title="' + convenio.TITULO + '" alt="' + convenio.TITULO + '" class="img-responsive img-conv"></a>\n            </div>\n        </div> \n        ';
            }).join('') + '\n        ';
        }
    }]);

    return ConveniosView;
}(View);
//# sourceMappingURL=ConveniosView.js.map