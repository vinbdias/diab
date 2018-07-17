class Quiz {

    constructor() {

        this._respostas = [];
    }

    set perguntas(perguntas) {

        this._perguntas = perguntas;
    }

    get perguntas() {

        return this._perguntas;
    }

    set perfis(perfis) {

        this._perfis = perfis;
    }

    get perfis() {

        return this._perfis;
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

    _calcularPontuacao(respostas) {

        let valores = [];
        this._respostas.forEach((rotuloResposta, indice) => {
            
            let opcaoResposta = this._perguntas[indice].opcoes.find(opcao => {
                
                return opcao.rotulo == rotuloResposta;
            });

            valores.push(opcaoResposta.valor);           
        });

        return valores.reduce((acumulador, valor) => acumulador + valor);
    }

    get perfis() {

        return this._perfis;
    }

    get perguntas() {

        return this._perguntas;
    }

    get respostas() {

        return this._respostas;
    }

    set respostas(respostas) {

        this._respostas = [].concat(respostas);
    }
}