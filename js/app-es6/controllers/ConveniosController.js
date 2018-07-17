class ConveniosController {

    constructor() {                

        this._categoriaConvenio = new CategoriaConvenio();
        this._listaCategoriasConvenios = new ListaCategoriasConvenios();
        this._categoriasConveniosView = new CategoriasConveniosView($('#categoriasConveniosView'));     

        this._listaCategoriasConvenios = new Bind(
            new ListaCategoriasConvenios(),
            new CategoriasConveniosView($('#categoriasConveniosView')),
            'categorias'
        );         

        this._listaConvenios = new Bind(
            new ListaConvenios(),
            new ConveniosView($('#conveniosView')),
            'convenios'
        );                  

        this._listaCategoriasConvenios.categorias = this._categoriaConvenio.getCategorias();
                               
        this._convenio = new Bind(
            new Convenio(),
            new ConvenioView($('#convenioView')),
            'convenio'
        );        
    }

    listarConveniosPorCategoria(categoriaId) {

        this._listaConvenios.convenios = [];  
        this._convenio.convenio = undefined;

        this._listaConvenios.convenios = this._convenio.getConveniosPorCategoriaId(categoriaId);               
    }

    mostrarConvenio(convenioId) {

        this._convenio.convenio = this._convenio.getConvenioPorId(convenioId);
    }
}