class ResultadoQuizView extends View {

    template(modelo) {
                
        return (modelo.resultado !== undefined) ? `
        <h3 class="text-center">SEU RESULTADO</h3>
        <h2 class="border-bottom border-gray pb-2 text-center">${modelo.resultado.perfil.nomePerfil}</h2>  <br/>                          
        <div class="col-md-10 col-lg-offset-1" >
           <div class="col-md-6 text-center">
                   <img src="img/consumidor_03.png" style="height:auto"/>
           </div>    
           <div class="col-md-6">
                   <p  style="font-size:24px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
           </div>                     
        </div>        
        ` : ``;
    }
}