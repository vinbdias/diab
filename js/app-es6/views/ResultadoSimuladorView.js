class ResultadoSimuladorView extends View {

    template(modelo) {

        return (modelo.resultado !== undefined) ? `
        <div class="col-md-12">
            <h1>Economia total de ${modelo.resultado.totalDesconto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</h1>            
        </div>        
        ` : ``;
    }
}