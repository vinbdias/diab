class Convenio {

    set convenio(convenio) {

        this._convenio = convenio;
    }

    get convenio() {

        return this._convenio;
    }

    getConvenioPorId(convenioId) {

        return ConveniosDataSource.getConvenios()
                 .find(convenio => convenio.ID == convenioId);        
    }

    getConveniosPorCategoriaId(categoriaId) {
        let convenios = [];
        ConveniosDataSource.getConvenios()
                           .forEach(convenio => (convenio.CATEGORIAS.indexOf(categoriaId.toString()) !== -1) ? convenios.push(convenio) : false); 

        return convenios;
    }
}