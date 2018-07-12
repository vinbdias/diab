class QuizController {

    constructor() {

        let $ = document.querySelector.bind(document);

        this._quiz = new Quiz();

        this._quizView = new QuizView($('#quizView'));
        this._quizView.update(this._quiz);      
        
        this._resultadoQuizView = new ResultadoQuizView($('#resultadoQuizView'));
    }

    submeterRespostas(event) {

        event.preventDefault();
        
        this._obterRespostas();
        
        if(!this._validar())
            return false;

        let respostas = [
            this._inputPergunta1.value,
            this._inputPergunta2.value,
            this._inputPergunta3.value,
            this._inputPergunta4.value,
            this._inputPergunta5.value,
            this._inputPergunta6.value,
            this._inputPergunta7.value,
            this._inputPergunta8.value,
            this._inputPergunta9.value,
            this._inputPergunta10.value,
        ];
        
        

        let perfil = this._quiz.calcularPerfil(respostas);

        this._resultadoQuizView.update(perfil);        
    }

    _validar() {

        if(
            this._inputPergunta1 == null ||
            this._inputPergunta2 == null ||
            this._inputPergunta3 == null ||
            this._inputPergunta4 == null ||
            this._inputPergunta5 == null ||
            this._inputPergunta6 == null ||
            this._inputPergunta7 == null ||
            this._inputPergunta8 == null ||
            this._inputPergunta9 == null ||
            this._inputPergunta10 == null
        )
            return false;

        return true;
    }

    _obterRespostas() {
        let $ = document.querySelector.bind(document);

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
}