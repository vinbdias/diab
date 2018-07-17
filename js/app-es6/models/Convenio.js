class Convenio {

    set convenio(convenio) {

        this._convenio = convenio;
    }

    get convenio() {

        return this._convenio;
    }

    limpa() {

        this._convenio = undefined;
    }
}