class ConvenioView extends View {

    template(model) {
        
        return `
            <h2>${model.TITULO}</h2>
            <p>${model.CONTEUDO}</p>
        `;
    }
}