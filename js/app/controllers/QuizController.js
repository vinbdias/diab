'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var QuizController = function () {
    function QuizController() {
        _classCallCheck(this, QuizController);

        this._quiz = new Bind(new Quiz(), new QuizView($('#quizView')), 'perguntas');
        this._quiz.perguntas = Perguntas.getPerguntas();
        this._quiz.perfis = Perfis.getPerfis();

        this._resultadoQuiz = new Bind(new ResultadoQuiz(), new ResultadoQuizView($('#resultadoQuizView')), 'resultado');

        this._quizService = new QuizService();
    }

    _createClass(QuizController, [{
        key: 'submeterRespostas',
        value: function submeterRespostas(event) {

            event.preventDefault();

            var teste = true;

            var respostas = [];

            if (!teste) {

                this._obterRespostas();

                if (!this._validar()) return false;

                respostas = [this._inputPergunta1.value, this._inputPergunta2.value, this._inputPergunta3.value, this._inputPergunta4.value, this._inputPergunta5.value, this._inputPergunta6.value, this._inputPergunta7.value, this._inputPergunta8.value, this._inputPergunta9.value, this._inputPergunta10.value];
            } else respostas = ["A", "B", "C", "C", "D", "A", "D", "D", "A", "A"];

            this._resultadoQuiz.resultado = this._quiz.calcularResultadoQuiz(respostas);

            this._quizService.gravarQuiz(respostas, this._resultadoQuiz.resultado);
        }
    }, {
        key: '_validar',
        value: function _validar() {

            if (this._inputPergunta1 == null || this._inputPergunta2 == null || this._inputPergunta3 == null || this._inputPergunta4 == null || this._inputPergunta5 == null || this._inputPergunta6 == null || this._inputPergunta7 == null || this._inputPergunta8 == null || this._inputPergunta9 == null || this._inputPergunta10 == null) return false;

            return true;
        }
    }, {
        key: '_obterRespostas',
        value: function _obterRespostas() {
            var $ = document.querySelector.bind(document);

            this._inputPergunta1 = $('input[name="pergunta1"]:checked');
            this._inputPergunta2 = $('input[name="pergunta2"]:checked');
            this._inputPergunta3 = $('input[name="pergunta3"]:checked');
            this._inputPergunta4 = $('input[name="pergunta4"]:checked');
            this._inputPergunta5 = $('input[name="pergunta5"]:checked');
            this._inputPergunta6 = $('input[name="pergunta6"]:checked');
            this._inputPergunta7 = $('input[name="pergunta7"]:checked');
            this._inputPergunta8 = $('input[name="pergunta8"]:checked');
            this._inputPergunta9 = $('input[name="pergunta9"]:checked');
            this._inputPergunta10 = $('input[name="pergunta10"]:checked');
        }
    }]);

    return QuizController;
}();
//# sourceMappingURL=QuizController.js.map