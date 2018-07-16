class Simulador {

    constructor() {

        this._descontoLazer = 0.1538;
        this._descontoComprasInternet = 0.1565;
        this._descontoEducacao = 0.1770;
        this._descontoFarmacia = 0.15;
    }

    calcularEconomia(comprasInternet, custosEducacao, custosFarmacia, custosLazer) {
        
        let totalCustos = comprasInternet + custosEducacao + custosFarmacia + custosLazer;

        let valorDescontoComprasInternet = comprasInternet * this._descontoComprasInternet;
        let comprasInternetDesconto = comprasInternet - valorDescontoComprasInternet;
    
        let valorDescontoEducacao = custosEducacao * this._descontoEducacao;
        let educacaoDesconto = custosEducacao - valorDescontoEducacao;

        let valorDescontoFarmacia = custosFarmacia * this._descontoFarmacia;
        let farmaciaDesconto = custosFarmacia - valorDescontoFarmacia;

        let valorDescontoLazer = custosLazer * this._descontoLazer;
        let lazerDesconto = custosLazer - valorDescontoLazer;

        let totalDesconto = valorDescontoComprasInternet + valorDescontoEducacao + valorDescontoFarmacia + valorDescontoLazer;

        let totalCustosDesconto = totalCustos - totalDesconto;

        return {

            totalCustos,

            valorDescontoComprasInternet,
            comprasInternetDesconto,

            valorDescontoEducacao,
            educacaoDesconto,

            valorDescontoFarmacia,
            farmaciaDesconto,

            valorDescontoLazer,
            lazerDesconto,

            totalDesconto,

            totalCustosDesconto
        };
    }
}