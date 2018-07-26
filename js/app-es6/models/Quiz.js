class Quiz {

    constructor() {

        this._respostas = [];
        this._perguntas = [];
    }

    set perguntas(perguntas) {

        if(Array.isArray(perguntas))
            this._perguntas = [].concat(perguntas);
        else  
            this._perguntas = perguntas;
    }

    get perguntas() {

        return this._perguntas;
    }

    set perfis(perfis) {

        this._perfis = [].concat(perfis);
    }

    get perfis() {

        return this._perfis;
    }

    set respostas(respostas) {

        this._respostas = [].concat(respostas);
    }
    
    get respostas() {

        return this._respostas;
    }    

    calcularResultadoQuiz(respostas) {
                    
        this._respostas = respostas;

        let pontuacao = this._calcularPontuacao();

        let resultadoQuiz = {

            pontuacao
        };
        

        if(pontuacao >= 90) {

            resultadoQuiz.perfil = this._perfis.find(perfil => {

                return perfil.indice == 90;
            });  
        }

            
        if(pontuacao >= 60 && pontuacao < 90) {

            resultadoQuiz.perfil = this._perfis.find(perfil => {

                return perfil.indice == 60;
            });        
        }

        if(pontuacao < 60) {

            resultadoQuiz.perfil = this._perfis.find(perfil => {

                return perfil.indice == 30;
            }); 
        }

        return resultadoQuiz;            
    }

    _calcularPontuacao() {

        let valores = [];        

        this._respostas.forEach((idResposta, indice) => {
            
            valores.push(this._perguntas[indice].opcoes.find(opcao => {
                
                return opcao.id == idResposta;
            }).valor);                 
        });

        return valores.reduce((acumulador, valor) => acumulador + valor);
    }

    getPerguntas() {

        let perguntas = this._embaralharOpcoes(PerguntasDataSource.getPerguntas());
        
        return perguntas;
    }

    _embaralharOpcoes(perguntas) {

        const opcoesRotulos = ['A', 'B', 'C', 'D'];
        
        perguntas.forEach((pergunta, indicePergunta) =>
                    ArrayHelper.shuffle(pergunta.opcoes).forEach((opcao, indiceOpcao) =>
                                                            opcao.rotulo = opcoesRotulos[indiceOpcao]));     
        
        return perguntas;
    }

    getPerfis() {

        return PerfisDataSource.getPerfis();
    }
}