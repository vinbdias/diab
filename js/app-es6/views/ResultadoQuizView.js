class ResultadoQuizView extends View {

    template(modelo) {
                       
        return ((modelo.resultado !== undefined) ? `
        <h3 class="text-center">SEU RESULTADO</h3>
        <h2 class="border-bottom border-gray pb-2 text-center">${modelo.resultado.perfil.nomePerfil}</h2>  <br/>                          
        <div class="col-md-10 col-lg-offset-1" >
           <div class="col-md-6 text-center">
                   <img src="img/${modelo.resultado.perfil.imagemPerfil}" style="height:auto"/>
           </div>    
           <div class="col-md-4">
                   <p  style="font-size:24px">${modelo.resultado.perfil.textoPerfil}</p>
           </div>                     
        </div>               
        ` : ``) + `
        <div class="col-md-10 col-lg-offset-1">
            <a class="et-hero-tab" href="#quiz" id="botaoRefazerQuiz">
                <img src="img/bt_refazer.png">
            </a>
        </div>             
        `;
    }
}