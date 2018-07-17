class ConveniosView extends View {

    template(model) {
        
        return `
            <ul>
                ${model.convenios.map(convenio => `
                <li class="conveniosCategoriaItem" id="convenio${StringHelper.ucWordsSanitizeRemoverEspacosEmBranco(convenio.TITULO)}" onclick="conveniosController.mostrarConvenio(${convenio.ID})">${convenio.TITULO}</li>
                `).join('')}
            </ul>
        `;
    }
}