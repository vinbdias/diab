class CategoriaConvenio {

    getCategorias() {
        
        return CategoriasConveniosDataSource.getCategorias();
    }

    getCategoriaPorId(categoriaId) {

        return CategoriasConveniosDataSource
                .getCategorias()
                .find(categoria => categoria.ID == categoriaId);   
    }    
}