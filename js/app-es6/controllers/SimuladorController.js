class SimuladorController {

    constructor() {

        let $ = document.querySelector.bind(document);

        this._inputComprasInternet = $('#comprasInternet');
        this._inputCustosEducacao = $('#custosEducacao');
        this._inputCustosFarmacia = $('#custosFarmacia');
        this._inputCustosLazer = $('#custosLazer');

        this._simulador = new Simulador();
        this._resultadoSimuladorView = new ResultadoSimuladorView($('#resuladoSimuladorView'));
    }

    formatarValorComprasInternet(event) {

        event.preventDefault();
        
        this._inputComprasInternet.value = NumeroHelper.formatarFloatToBRL(this._inputComprasInternet.value);
    }

    formatarValorCustosEducacao(event) {

        event.preventDefault();

        this._inputCustosEducacao.value = NumeroHelper.formatarFloatToBRL(this._inputCustosEducacao.value);
    }

    formatarValorCustosFarmacia(event) {

        event.preventDefault();

        this._inputCustosFarmacia.value = NumeroHelper.formatarFloatToBRL(this._inputCustosFarmacia.value);
    }

    formatarValorCustosLazer(event) {

        event.preventDefault();

        this._inputCustosLazer.value = NumeroHelper.formatarFloatToBRL(this._inputCustosLazer.value);
    }

    calcularEconomia(event) {

        event.preventDefault();

        let economia = this._simulador.calcularEconomia(NumeroHelper.formatarBRLToFloat(this._inputComprasInternet.value),
                                                        NumeroHelper.formatarBRLToFloat(this._inputCustosEducacao.value),
                                                        NumeroHelper.formatarBRLToFloat(this._inputCustosFarmacia.value),
                                                        NumeroHelper.formatarBRLToFloat(this._inputCustosLazer.value));

        console.log(economia);

        this._resultadoSimuladorView.update(economia);
        
    }
}