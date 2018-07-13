"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QuizRespostasService = function (_HttpService) {
    _inherits(QuizRespostasService, _HttpService);

    function QuizRespostasService() {
        _classCallCheck(this, QuizRespostasService);

        return _possibleConstructorReturn(this, (QuizRespostasService.__proto__ || Object.getPrototypeOf(QuizRespostasService)).apply(this, arguments));
    }

    _createClass(QuizRespostasService, [{
        key: "gravarRespostas",
        value: function gravarRespostas(respostas) {
            var _this2 = this;

            var respostasPostData = {

                "resposta_1": respostas[0],
                "resposta_2": respostas[1],
                "resposta_3": respostas[2],
                "resposta_4": respostas[3],
                "resposta_5": respostas[4],
                "resposta_6": respostas[5],
                "resposta_7": respostas[6],
                "resposta_8": respostas[7],
                "resposta_9": respostas[8],
                "resposta_10": respostas[9]
            };

            return new Promise(function (resolve, reject) {

                _this2.post('https://www.anajustra.org.br/api/diab/gravaRespostasQuiz.php', respostasPostData).then(function (respostas) {
                    return resolve(respostas);
                }).catch(function () {
                    return reject('Não foi possível gravar as respostas do quiz.');
                });
            });
        }
    }]);

    return QuizRespostasService;
}(HttpService);
//# sourceMappingURL=QuizRespostasService.js.map