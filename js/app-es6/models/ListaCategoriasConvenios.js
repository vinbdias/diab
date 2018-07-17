class ListaCategoriasConvenios {

    constructor() {

        this._categorias = [];
    }

    adiciona(categoria) {
        
        this._categorias.push(categoria);
    }    

    set categorias(categorias) {

        if(Array.isArray(categorias))
            this._categorias = categorias;
    }

    get categorias() {

        return [].concat(this._categorias);
    }
}