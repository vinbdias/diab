class CategoriasConveniosView extends View {

    template(model) {

        return `
            <ul>
                ${model.categorias.map(categoria => `
                <li class="categoriasConveniosItem" id="categoria${categoria.ID}" onclick="conveniosController.listarConveniosPorCategoria(${categoria.ID})">${categoria.CATEGORIA}</li>
                `).join('')}
            </ul>
        `;
    }
}