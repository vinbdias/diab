class ConveniosController {

    constructor() {        

        this._conveniosService = new ConveniosService();

        this._listaCategoriasConvenios = new ListaCategoriasConvenios();
        this._categoriasConveniosView = new CategoriasConveniosView($('#categoriasConveniosView'));     

        this._listaConvenios = new ListaConvenios();
        this._conveniosView = new ConveniosView($('#conveniosView'));

        this._convenioView = new ConvenioView($('#convenioView'));

        this._conveniosService.obterCategorias()
                               .then(categorias => {

                                    categorias.forEach(categoria => this._listaCategoriasConvenios.adiciona(categoria));                                    
                                    this._categoriasConveniosView.update(this._listaCategoriasConvenios);
                               });   
                               
        this._convenio = {};
    }

    listarConveniosPorCategoria(categoriaId) {

        this._conveniosService.obterConveniosPorCategoria(categoriaId)
                              .then(convenios => {

                                  this._listaConvenios.limpa();
                                  convenios.forEach(convenio => this._listaConvenios.adiciona(convenio));                                 
                                  this._conveniosView.update(this._listaConvenios);                                
                              });
    }

    mostrarConvenio(convenioId) {

        this._conveniosService.obterConvenio(convenioId)
                              .then(convenio => {

                                  this._convenio = convenio;                                  
                                  this._convenioView.update(convenio);
                              });                              
    }
}