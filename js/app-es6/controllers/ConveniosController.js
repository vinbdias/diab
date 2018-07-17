class ConveniosController {

    constructor() {                

        this._listaCategoriasConvenios = new ListaCategoriasConvenios();
        this._categoriasConveniosView = new CategoriasConveniosView($('#categoriasConveniosView'));     

        this._listaCategoriasConvenios = new Bind(
            new ListaCategoriasConvenios(),
            new CategoriasConveniosView($('#categoriasConveniosView')),
            'adiciona'
        );         

        this._listaConvenios = new Bind(
            new ListaConvenios(),
            new ConveniosView($('#conveniosView')),
            'adiciona', 'limpa'
        );                  

        CategoriasConvenios.getCategorias()
                           .forEach(categoria => this._listaCategoriasConvenios.adiciona(categoria));
                               
        this._convenio = new Bind(
            new Convenio(),
            new ConvenioView($('#convenioView')),
            'convenio'
        );        
    }

    listarConveniosPorCategoria(categoriaId) {

        this._listaConvenios.limpa();  
        this._convenio.limpa();         

        Convenios.getConvenios()
                 .forEach(convenio => (convenio.CATEGORIAS.indexOf(categoriaId.toString()) !== -1) ? this._listaConvenios.adiciona(convenio) : false);                
    }

    mostrarConvenio(convenioId) {

        this._convenio.convenio = Convenios.getConvenios()
                                           .find(convenio => convenio.ID == convenioId);
    }
}