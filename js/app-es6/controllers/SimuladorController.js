class SimuladorController {

    constructor() {        

        this._inputComprasInternet = $('#comprasInternet');
        this._inputCustosEducacao = $('#custosEducacao');
        this._inputCustosFarmacia = $('#custosFarmacia');
        this._inputCustosLazer = $('#custosLazer');
        this._botaoEnviar = $('#botaoEnviarSimulador');
        this._spanTextoDescubra = $('#spanTextoDescubra');
        this._spanTextoInforme = $('#spanTextoInforme');
        this._divCamposSimulador = $('#camposSimulador');
        this._divResultadoSimulador = $('#resultadoSimuladorView');

        this._capturarClickBotao();

        this._capturarKeyUpInputs();

        this._simulador = new Simulador();

        this._resultadoSimulador = new Bind(
            new ResultadoSimulador(),
            new ResultadoSimuladorView($('#resultadoSimuladorView')),
            'resultado'
        );        
    }

    _capturarKeyUpInputs() {

        this._inputComprasInternet.on('keyup', e => this._formatarValorComprasInternet(e));

        this._inputCustosEducacao.on('keyup', e => this._formatarValorCustosEducacao(e));

        this._inputCustosFarmacia.on('keyup', e => this._formatarValorCustosFarmacia(e));

        this._inputCustosLazer.on('keyup', e => this._formatarValorCustosLazer(e));
    }

    _capturarClickBotao() {

        this._botaoEnviar.on('click', e => {

            e.preventDefault();

            this._calcularEconomia();
            this._esconderInputsExibirResultado();
        });
    }

    _formatarValorComprasInternet(event) {

        event.preventDefault();
        
        this._inputComprasInternet.val(NumeroHelper.formatarFloatToBRL(this._inputComprasInternet.val()));
    }

    _formatarValorCustosEducacao(event) {

        event.preventDefault();

        this._inputCustosEducacao.val(NumeroHelper.formatarFloatToBRL(this._inputCustosEducacao.val()));
    }

    _formatarValorCustosFarmacia(event) {

        event.preventDefault();

        this._inputCustosFarmacia.val(NumeroHelper.formatarFloatToBRL(this._inputCustosFarmacia.val()));
    }

    _formatarValorCustosLazer(event) {

        event.preventDefault();

        this._inputCustosLazer.val(NumeroHelper.formatarFloatToBRL(this._inputCustosLazer.val()));
    }

    _calcularEconomia() {        

        this._resultadoSimulador.resultado = this._simulador.calcularEconomia(NumeroHelper.parseBRLToFloat(this._inputComprasInternet.val()),
                                                        NumeroHelper.parseBRLToFloat(this._inputCustosEducacao.val()),
                                                        NumeroHelper.parseBRLToFloat(this._inputCustosFarmacia.val()),
                                                        NumeroHelper.parseBRLToFloat(this._inputCustosLazer.val()));  
                                                        
    
    }

    _esconderInputsExibirResultado() {

        this._divCamposSimulador.fadeOut(1000);
        this._botaoEnviar.fadeOut(1000);
        this._spanTextoDescubra.fadeOut(1000);
        this._spanTextoInforme.fadeOut(1000, () =>this._divResultadoSimulador.fadeIn(1500));
    }
}