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
        let economiaComprasInternet = comprasInternet - valorDescontoComprasInternet;
    
        let valorDescontoEducacao = custosEducacao * this._descontoEducacao;
        let economiaEducacao = custosEducacao - valorDescontoEducacao;

        let valorDescontoFarmacia = custosFarmacia * this._descontoFarmacia;
        let economiaFarmacia = custosFarmacia - valorDescontoFarmacia;

        let valorDescontoLazer = custosLazer * this._descontoLazer.calcularEconomia;
        let economiaLazer = custosLazer - valorDescontoLazer;

        let economiaTotal = totalCustos - economiaComprasInternet + economiaEducacao + economiaFarmacia + economiaLazer;

        return {

            totalCustos,

            valorDescontoComprasInternet,
            economiaComprasInternet,

            valorDescontoEducacao,
            economiaEducacao,

            valorDescontoFarmacia,
            economiaFarmacia,

            valorDescontoLazer,
            economiaLazer
        };
    }
}