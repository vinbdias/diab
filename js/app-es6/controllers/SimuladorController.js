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
        this._simuladorService = new SimuladorService();

        this._resultadoSimulador = new Bind(
            new ResultadoSimulador(),
            new ResultadoSimuladorView($('#resultadoSimuladorView')),
            'resultado'
        );        
    }

    reset() {

        this._inputComprasInternet.val('');
        this._inputCustosEducacao.val('');
        this._inputCustosFarmacia.val('');
        this._inputCustosLazer.val('');
        
        if(this._divResultadoSimulador.css('display') === 'block') {

            this._divResultadoSimulador.fadeOut(1000, () => {

                this._divCamposSimulador.fadeIn(1000);
                this._botaoEnviar.fadeIn(1000);
                this._spanTextoDescubra.fadeIn(1000);
                this._spanTextoInforme.fadeIn(1000);                
            });
        }
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

            if(this._validar()) {

                this._calcularEconomia();
                this._esconderInputsExibirResultado();
            }
        });
    }

    _validar() {

        if(!this._inputComprasInternet.val() ||
           !this._inputCustosEducacao.val() ||
           !this._inputCustosFarmacia.val() ||
           !this._inputCustosLazer.val())
           return false;

        return true;
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

        let comprasInternet = NumeroHelper.parseBRLToFloat(this._inputComprasInternet.val()),
            custosEducacao = NumeroHelper.parseBRLToFloat(this._inputCustosEducacao.val()),
            custosFarmacia = NumeroHelper.parseBRLToFloat(this._inputCustosFarmacia.val()),
            custosLazer = NumeroHelper.parseBRLToFloat(this._inputCustosLazer.val());

        this._resultadoSimulador.resultado = this._simulador.calcularEconomia(comprasInternet, custosEducacao,
                                                                              custosFarmacia, custosLazer);  

        this._simuladorService.gravarSimulacao(this._resultadoSimulador.resultado, 
                                               comprasInternet, custosEducacao,
                                               custosFarmacia, custosLazer);                                                
    }

    _esconderInputsExibirResultado() {

        this._divCamposSimulador.fadeOut(1000);
        this._botaoEnviar.fadeOut(1000);
        this._spanTextoDescubra.fadeOut(1000);
        this._spanTextoInforme.fadeOut(1000, () => this._divResultadoSimulador.fadeIn(1500));
    }
}