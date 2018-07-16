class View {

    constructor(elemento) {

        if(!elemento)
            throw new Error('Um elemento do DOM deve ser passado ao construtor da view.');

        this._elemento = elemento;
    }

    template() {

        throw new Error('O método template deve ser implementado');
    }

    update(model) {
        
        this._elemento.html(this.template(model));
    }

    clear() {

        this._elemento.html(``);
    }
}