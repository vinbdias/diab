class ResultadoQuizView extends View {

    template(modelo) {
                 
        return (modelo.resultado !== undefined) ? `
        <div class="col-md-12">
            <h1>${modelo.resultado.perfil.nomePerfil}</h1>
            <p>${modelo.resultado.perfil.textoPerfil}</p>
        </div>        
        ` : ``;
    }
}