class ResultadoSimuladorView extends View {

    template(modelo) {

        return (modelo.resultado !== undefined) ? `
        <div class="col-md-6 text-right">
            <p>Seus gastos mensais:</p>
            <p class="gasto_mes">${modelo.resultado.totalCustos.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
            <br/>
            <p>Quanto você gastaria usando<br/>a rede conveniada ANAJUSTRA:</p>
            <p class="desc_ansjt">${modelo.resultado.totalCustosDesconto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
        </div>
        <div class="col-md-6">
            <div class="triangulo text-center">
                Economia de<br/>
                <span>${modelo.resultado.totalDesconto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span> por mês<br/>
                e <span>${(modelo.resultado.totalDesconto*12).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span> por ano
            </div>
        </div>                
        ` : ``;
    }
}