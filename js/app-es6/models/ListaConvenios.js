class ListaConvenios {

    constructor() {

        this._convenios = [];
    }

    adiciona(convenio) {
        
        this._convenios.push(convenio);
    }   
    
    limpa() {

        this._convenios = [];
    }

    get convenios() {

        return [].concat(this._convenios);
    }    
}