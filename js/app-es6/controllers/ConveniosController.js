class ConveniosController {

    constructor() {      
        
        this._categoriaConvenio = new CategoriaConvenio();

        this._listaConvenios = new Bind(
            new ListaConvenios(),
            new ConveniosView($('#conveniosView')),
            'convenios'
        );                  
        
                               
        this._convenio = new Bind(
            new Convenio(),
            new ConvenioView($('#convenioView')),
            'convenio'
        ); 
                        
        
        this._tituloCategoriaListaConvenios = $('#tituloCategoriaListaConvenios');
        
        this._capturarClickCategoria();

        this._capturarClickBotaoVoltarParaCategorias();
    }

    reset() {
        
        this._convenio.convenio = undefined;
        this._listaConvenios.convenios = [];
        this._tituloCategoriaListaConvenios.html('');
    }

    _capturarClickCategoria() {

        const acaoClickCategoria = this._listarConveniosPorCategoria.bind(this);
        $('.linkCategoria').each(function() {
            
            $(this).on('click', () => acaoClickCategoria($(this).data('categoria')));            
        });
    }

    _capturarClickConvenio() {

        const acaoClickConvenio = this._mostrarConvenio.bind(this);   
        $('.linkConvenio').each(function() {

            $(this).on('click', () => acaoClickConvenio($(this).data('convenio')));
        });
    }

    _capturarClickBotaoVoltarParaCategorias() {

        $('#botaoVoltarParaCategorias').on('click', () => this._listaConvenios.convenios = []);
    }

    _capturarClickBotaoVoltarParaConvenios() {

        $('#botaoVoltarParaConvenios').on('click', () => this._convenio.convenio = undefined);
    }

    _listarConveniosPorCategoria(categoriaId) {
        
        this._listaConvenios.convenios = [];  
        this._convenio.convenio = undefined;

        this._listaConvenios.convenios = this._convenio.getConveniosPorCategoriaId(categoriaId);      
                
        this._tituloCategoriaListaConvenios.html(
            this._categoriaConvenio.getCategoriaPorId(categoriaId).CATEGORIA
        );

        this._capturarClickConvenio();
    }

    _mostrarConvenio(convenioId) {

        this._convenio.convenio = this._convenio.getConvenioPorId(convenioId);

        this._capturarClickBotaoVoltarParaConvenios();
    }
    
}