class ListaCategoriasConvenios {

    constructor() {

        this._categorias = [];
    }

    adiciona(categoria) {
        
        this._categorias.push(categoria);
    }    

    get categorias() {

        return [].concat(this._categorias);
    }
}