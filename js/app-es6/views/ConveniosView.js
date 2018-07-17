class ConveniosView extends View {

    template(model) {

        return `
            <ul>
                ${model.convenios.map(convenio => `
                <li class="conveniosCategoriaItem" id="convenio${StringHelper.ucWordsSanitizeRemoverEspacosEmBranco(convenio.CONVENIO)}" onclick="conveniosController.mostrarConvenio(${convenio.ID})">${convenio.CONVENIO}</li>
                `).join('')}
            </ul>
        `;
    }
}