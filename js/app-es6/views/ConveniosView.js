class ConveniosView extends View {

    template(modelo) {
        
        return `
        ${modelo.convenios.map(convenio => `
        <div class="conv col-md-2"> 
            <div class="gallery_convenios">
                <a class="et-hero-tab linkConvenio" href="#mostra_convenio" data-convenio="${convenio.ID}">
                    <img src="https://www.anajustra.org.br/img_site/convenios/${convenio.IMAGEM}" title="${convenio.TITULO}" alt="${convenio.TITULO}" class="img-responsive img-conv"></a>
            </div>
        </div> 
        `).join('')}
        `;
    }
}