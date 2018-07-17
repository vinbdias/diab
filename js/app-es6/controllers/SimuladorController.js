class SimuladorController {

    constructor() {        

        this._inputComprasInternet = $('#comprasInternet');
        this._inputCustosEducacao = $('#custosEducacao');
        this._inputCustosFarmacia = $('#custosFarmacia');
        this._inputCustosLazer = $('#custosLazer');

        this._simulador = new Simulador();

        this._resultadoSimulador = new Bind(
            new ResultadoSimulador(),
            new ResultadoSimuladorView($('#resultadoSimuladorView')),
            'resultado'
        );        
    }

    formatarValorComprasInternet(event) {

        event.preventDefault();
        
        this._inputComprasInternet.val(NumeroHelper.formatarFloatToBRL(this._inputComprasInternet.val()));
    }

    formatarValorCustosEducacao(event) {

        event.preventDefault();

        this._inputCustosEducacao.val(NumeroHelper.formatarFloatToBRL(this._inputCustosEducacao.val()));
    }

    formatarValorCustosFarmacia(event) {

        event.preventDefault();

        this._inputCustosFarmacia.val(NumeroHelper.formatarFloatToBRL(this._inputCustosFarmacia.val()));
    }

    formatarValorCustosLazer(event) {

        event.preventDefault();

        this._inputCustosLazer.val(NumeroHelper.formatarFloatToBRL(this._inputCustosLazer.val()));
    }

    calcularEconomia(event) {

        event.preventDefault();

        this._resultadoSimulador.resultado = this._simulador.calcularEconomia(NumeroHelper.parseBRLToFloat(this._inputComprasInternet.val()),
                                                        NumeroHelper.parseBRLToFloat(this._inputCustosEducacao.val()),
                                                        NumeroHelper.parseBRLToFloat(this._inputCustosFarmacia.val()),
                                                        NumeroHelper.parseBRLToFloat(this._inputCustosLazer.val()));                
        
    }
}