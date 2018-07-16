class ResultadoQuizView extends View {

    template(modelo) {
        
        console.log(modelo);
        return `
        <div class="col-md-12">
            <h1>${modelo.perfil.nomePerfil}</h1>
            <p>${modelo.perfil.textoPerfil}</p>
        </div>        
        `;
    }
}