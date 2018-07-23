'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var QuizController = function () {
    function QuizController() {
        _classCallCheck(this, QuizController);

        this._teste = false;

        this._quiz = new Bind(new Quiz(), new QuizView($('#quizView')), 'perguntas');

        this._divSmartWizard = $('#smartwizard');

        this._quiz.perguntas = this._quiz.getPerguntas();

        this._inputRespostas = $('.inputRespostaQuiz');

        this._quiz.perfis = this._quiz.getPerfis();

        this._resultadoQuiz = new Bind(new ResultadoQuiz(), new ResultadoQuizView($('#resultadoQuizView')), 'resultado');

        this._quizService = new QuizService();
    }

    _createClass(QuizController, [{
        key: 'jQuerySmartWizard',
        value: function jQuerySmartWizard() {
            var _this = this;

            this._divSmartWizard.on('leaveStep', function (e, anchorObject, stepNumber, stepDirection, stepPosition) {

                if (stepDirection == 'forward') {

                    var numeroPergunta = stepNumber + 1;
                    if (_this._validarResposta(numeroPergunta)) {

                        if (numeroPergunta == 10) _this._submeterRespostas();

                        return true;
                    } else return false;
                }

                return true;
            });

            this._divSmartWizard.on('showStep', function (e, anchorObject, stepNumber, stepDirection, stepPosition) {

                if (stepPosition === 'first') $('#prev-btn').addClass('disabled');else if (stepPosition === 'final') $("#next-btn").addClass('disabled');else {

                    $('#prev-btn').removeClass('disabled');
                    $('#next-btn').removeClass('disabled');
                }
            });

            this._divSmartWizard.smartWizard({
                selected: 0,
                theme: 'default',
                transitionEffect: 'fade',
                showStepURLhash: false,
                toolbarSettings: { toolbarPosition: 'both', toolbarButtonPosition: 'end' }
            });
        }
    }, {
        key: 'reset',
        value: function reset() {

            this._resetRespostas();
            this._jQuerySmartWizardReset();
            this._resultadoQuiz.resultado = undefined;
        }
    }, {
        key: '_resetRespostas',
        value: function _resetRespostas() {

            this._inputRespostas.each(function () {

                $(this).prop('checked', false);
            });
        }
    }, {
        key: '_jQuerySmartWizardReset',
        value: function _jQuerySmartWizardReset() {

            this._divSmartWizard.smartWizard('reset');

            return true;
        }
    }, {
        key: '_submeterRespostas',
        value: function _submeterRespostas() {

            var respostas = [];

            if (!this._teste) {

                this._obterRespostas();

                respostas = [this._inputPergunta1.val(), this._inputPergunta2.val(), this._inputPergunta3.val(), this._inputPergunta4.val(), this._inputPergunta5.val(), this._inputPergunta6.val(), this._inputPergunta7.val(), this._inputPergunta8.val(), this._inputPergunta9.val(), this._inputPergunta10.val()];
            } else respostas = ["A", "B", "C", "C", "D", "A", "D", "D", "A", "A"];

            this._resultadoQuiz.resultado = this._quiz.calcularResultadoQuiz(respostas);

            this._capturarClickBotaoRefazer();

            this._quizService.gravarQuiz(respostas, this._resultadoQuiz.resultado);
        }
    }, {
        key: '_capturarClickBotaoRefazer',
        value: function _capturarClickBotaoRefazer() {
            var _this2 = this;

            $('#botaoRefazerQuiz').on('click', function () {
                return _this2.reset();
            });
        }
    }, {
        key: '_validarQuiz',
        value: function _validarQuiz() {

            if (!this._inputPergunta1.length || !this._inputPergunta2.length || !this._inputPergunta3.length || !this._inputPergunta4.length || !this._inputPergunta5.length || !this._inputPergunta6.length || !this._inputPergunta7.length || !this._inputPergunta8.length || !this._inputPergunta9.length || !this._inputPergunta10.length) return false;

            return true;
        }
    }, {
        key: '_obterRespostas',
        value: function _obterRespostas() {

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
    }, {
        key: '_validarResposta',
        value: function _validarResposta(numero) {

            if (this._teste) return true;

            var inputPergunta = $('input[name="pergunta' + numero.toString() + '"]:checked');

            if (inputPergunta.length > 0) return true;

            return false;
        }
    }]);

    return QuizController;
}();
//# sourceMappingURL=QuizController.js.map