class QuizView extends View {  

    template(model) {
        return (model.perguntas !== undefined) ? `
        ${model.perguntas.map(pergunta => `
        <div id="step-${pergunta.numero}">
            <h3 class="text-center">Pergunta ${pergunta.numero} de 10</h3><br/>
            <h2 class="border-bottom border-gray pb-2 text-center">${pergunta.textoPergunta}</h2>
            <div class="col-md-10 col-lg-offset-1 pergunta" id="pergunta${pergunta.numero}">
                ${pergunta.opcoes.map(opcao => `
                <div class="radio">
                    <input class="inputRespostaQuiz" type="radio" name="pergunta${pergunta.numero}" id="pergunta${pergunta.numero}Opcao${opcao.rotulo}" value="${opcao.rotulo}">
                    <label for="pergunta${pergunta.numero}Opcao${opcao.rotulo}">
                    &nbsp;${opcao.textoOpcao}
                    </label>
                </div> 
                `).join('')}                           
            </div>
        </div>
        `).join('')}

        <div id="step-11" class="">
            <div id="resultadoQuizView">
            </div>
        </div>            
        ` 
        : ``; 
               
    }
    
}

