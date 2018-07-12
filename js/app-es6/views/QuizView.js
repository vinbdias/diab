class QuizView extends View {  

    template(model) {

        return `
            ${model.perguntas.map(pergunta => `
            <div class="col-md-12 pergunta" id="pergunta${pergunta.numero}">
                <h3>Pergunta ${pergunta.numero} de 10</h3>
                <h2>${pergunta.textoPergunta}</h2>
                ${pergunta.opcoes.map(opcao => `
                <div class="radio">
                    <label for="pergunta${pergunta.numero}Opcao${opcao.rotulo}">
                        ${opcao.rotulo}) ${opcao.textoOpcao}
                    </label>&nbsp;
                    <input type="radio" name="pergunta${pergunta.numero}" id="pergunta${pergunta.numero}Opcao${opcao.rotulo}" value="${opcao.rotulo}">
                </div>            
                `)
                .join('')}                                            
            </div> 
            `)
            .join('')}  
            <div class="col-md-12 text-center">
                <button type="submit" class="btn btn-primary" onclick="quizController.submeterRespostas(event)">Enviar</button>
            </div>               
        `;
    }
}