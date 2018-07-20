class ConvenioView extends View {

    template(modelo) {
                
        return (modelo.convenio !== undefined) ? `
            <div class="col-md-2" style="height:450px;">
                <div class="gallery_convenios2" style="margin:120px 0 0 20px;height: 160px; " >
                        <img src="https://www.anajustra.org.br/img_site/convenios/${modelo.convenio.IMAGEM}" title="${modelo.convenio.TITULO}" alt="${modelo.convenio.TITULO}" class="img-responsive img-conv"/>
                </div>
                <div style="position:absolute;bottom:0;margin:0 0 0 95px;"><a class="et-hero-tab" href="#cat_convenios" id="botaoVoltarParaConvenios"><img src="img/bt_voltar.png"></a></div>
            </div>
            
            <div class="col-md-9 text_conv text-left">
                ${modelo.convenio.CONTEUDO}               
            </div>             
        `: ``;
    }
}