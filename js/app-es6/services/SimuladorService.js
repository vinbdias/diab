class SimuladorService extends HttpService {

    gravarSimulacao(resultado, comprasInternet, custosEducacao, custosFarmacia, custosLazer) {

        return new Promise((resolve, reject) => {            
            
            this.post('https://www.anajustra.org.br/api/diab/gravaSimulacaoSimulador.php', {
                totalCustos: resultado.totalCustos,
                totalCustosDesconto: resultado.totalCustosDesconto,
                totalDesconto: resultado.totalDesconto,
                comprasInternet,
                custosEducacao,
                custosFarmacia,
                custosLazer
            })
                .then((simulacao) => resolve(simulacao))
                .catch(() => reject('Não foi possível gravar a simulação.'));
        });
    }
}