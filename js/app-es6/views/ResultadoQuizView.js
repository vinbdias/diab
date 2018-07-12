class ResultadoQuizView extends View {

    template(modelo) {

        return `
        <div class="col-md-12">
            <h1>${modelo.nomePerfil}</h1>
            <p>${modelo.textoPerfil}</p>
        </div>        
        `;
    }
}