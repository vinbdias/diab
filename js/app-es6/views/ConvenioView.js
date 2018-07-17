class ConvenioView extends View {

    template(model) {
                
        return (model.convenio !== undefined) ? `
            <h2>${model.convenio.TITULO}</h2>
            <div class="convenioConteudo">${model.convenio.CONTEUDO}</div>
        `: ``;
    }
}