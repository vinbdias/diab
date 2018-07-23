"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResultadoQuizView = function (_View) {
    _inherits(ResultadoQuizView, _View);

    function ResultadoQuizView() {
        _classCallCheck(this, ResultadoQuizView);

        return _possibleConstructorReturn(this, (ResultadoQuizView.__proto__ || Object.getPrototypeOf(ResultadoQuizView)).apply(this, arguments));
    }

    _createClass(ResultadoQuizView, [{
        key: "template",
        value: function template(modelo) {

            return modelo.resultado !== undefined ? "\n        <h3 class=\"text-center\">SEU RESULTADO</h3>\n        <h2 class=\"border-bottom border-gray pb-2 text-center\">" + modelo.resultado.perfil.nomePerfil + "</h2>  <br/>                          \n        <div class=\"col-md-10 col-lg-offset-1\" >\n           <div class=\"col-md-6 text-center\">\n                   <img src=\"img/consumidor_03.png\" style=\"height:auto\"/>\n           </div>    \n           <div class=\"col-md-4\">\n                   <p  style=\"font-size:24px\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n           </div>                     \n        </div>        \n        <div class=\"col-md-10 col-lg-offset-1\">\n            <a class=\"et-hero-tab\" href=\"#quiz\" id=\"botaoRefazerQuiz\">\n                <img src=\"img/bt_refazer.png\">\n            </a>\n        </div>        \n        " : "";
        }
    }]);

    return ResultadoQuizView;
}(View);
//# sourceMappingURL=ResultadoQuizView.js.map