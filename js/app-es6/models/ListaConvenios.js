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

    set convenios(convenios) {
        
        if(Array.isArray(convenios))
            this._convenios = convenios;
    }

    get convenios() {

        return [].concat(this._convenios);
    }    
}