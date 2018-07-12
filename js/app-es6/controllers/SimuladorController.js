class SimuladorController {

    constructor() {

        let $ = document.querySelector.bind(document);

        this._inputComprasInternet = $('#comprasInternet');
        this._inputCustosEducacao = $('#custosEducacao');
        this._inputCustosFarmacia = $('#custosFarmacia');
        this._inputCustosLazer = $('#custosLazer');
    }

    formatarValorComprasInternet(event) {

        event.preventDefault();
        
        this._inputComprasInternet.value = NumeroHelper.formatarMoeda(this._inputComprasInternet.value);
    }

    formatarValorCustosEducacao(event) {

        event.preventDefault();

        this._inputCustosEducacao.value = NumeroHelper.formatarMoeda(this._inputCustosEducacao.value);
    }

    formatarValorCustosFarmacia(event) {

        event.preventDefault();

        this._inputCustosFarmacia.value = NumeroHelper.formatarMoeda(this._inputCustosFarmacia.value);
    }

    formatarValorCustosLazer(event) {

        event.preventDefault();

        this._inputCustosLazer.value = NumeroHelper.formatarMoeda(this._inputCustosLazer.value);
    }
}