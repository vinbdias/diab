"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ConvenioView = function (_View) {
    _inherits(ConvenioView, _View);

    function ConvenioView() {
        _classCallCheck(this, ConvenioView);

        return _possibleConstructorReturn(this, (ConvenioView.__proto__ || Object.getPrototypeOf(ConvenioView)).apply(this, arguments));
    }

    _createClass(ConvenioView, [{
        key: "template",
        value: function template(modelo) {

            return modelo.convenio !== undefined ? "\n            <div class=\"col-md-2\" style=\"height:450px;\">\n                <div class=\"gallery_convenios\" style=\"width:140px;padding:15px 0 15px 25px;margin:120px 0 0 75px;\" >\n                        <img src=\"https://www.anajustra.org.br/img_site/convenios/" + modelo.convenio.IMAGEM + "\" title=\"" + modelo.convenio.TITULO + "\" alt=\"" + modelo.convenio.TITULO + "\" class=\"img-responsive \"/>\n                </div>            \n                <div style=\"position:absolute;bottom:0;margin:0 0 0 95px;\"><a class=\"et-hero-tab\" href=\"#cat_convenios\" id=\"botaoVoltarParaConvenios\"><img src=\"img/bt_voltar.png\"></a></div>\n            </div>\n            \n            <div class=\"col-md-9 text_conv text-left\">\n                " + modelo.convenio.CONTEUDO + "               \n            </div>             \n        " : "";
        }
    }]);

    return ConvenioView;
}(View);
//# sourceMappingURL=ConvenioView.js.map