'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QuizView = function (_View) {
    _inherits(QuizView, _View);

    function QuizView() {
        _classCallCheck(this, QuizView);

        return _possibleConstructorReturn(this, (QuizView.__proto__ || Object.getPrototypeOf(QuizView)).apply(this, arguments));
    }

    _createClass(QuizView, [{
        key: 'template',
        value: function template(model) {

            return '\n            ' + model.perguntas.map(function (pergunta) {
                return '\n            <div class="col-md-12 pergunta" id="pergunta' + pergunta.numero + '">\n                <h3>Pergunta ' + pergunta.numero + ' de 10</h3>\n                <h2>' + pergunta.textoPergunta + '</h2>\n                ' + pergunta.opcoes.map(function (opcao) {
                    return '\n                <div class="radio">\n                    <label for="pergunta' + pergunta.numero + 'Opcao' + opcao.rotulo + '">\n                        ' + opcao.rotulo + ') ' + opcao.textoOpcao + '\n                    </label>&nbsp;\n                    <input type="radio" name="pergunta' + pergunta.numero + '" id="pergunta' + pergunta.numero + 'Opcao' + opcao.rotulo + '" value="' + opcao.rotulo + '">\n                </div>            \n                ';
                }).join('') + '                                            \n            </div> \n            ';
            }).join('') + '  \n            <div class="col-md-12 text-center">\n                <button type="submit" class="btn btn-primary" onclick="quizController.submeterRespostas(event)">Enviar</button>\n            </div>               \n        ';
        }
    }]);

    return QuizView;
}(View);
//# sourceMappingURL=QuizView.js.map