class ConveniosView extends View {

    template(model) {

        return `
            <ul>
                ${model.convenios.map(convenio => `
                <li class="conveniosCategoriaItem" id="convenio${convenio.ID}" onclick="conveniosController.mostrarConvenio(${convenio.ID})">${convenio.CONVENIO}</li>
                `)}
            </ul>
        `;
    }
}