class CategoriasConveniosView extends View {

    template(modelo) {
        console.log(modelo.categorias);
        return `
            <div class="col-md-10 col-lg-offset-1 categorias">
                <h1>Selecione uma categoria</h1><br/><br/><br/>
                ${modelo.categorias.map(categoria => `                
                <a class="et-hero-tab linkCategoria" data-categoria="${categoria.ID}" href="#cat_convenios"><div class="col-md-2 cat_conv" id="categoriaConvenio${StringHelper.ucWordsSanitizeRemoverEspacosEmBranco(categoria.CATEGORIA)}">${categoria.CATEGORIA}</div></a>
                `).join('')}                
            </div>         
        `;
    }
}