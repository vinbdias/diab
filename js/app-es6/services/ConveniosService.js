class ConveniosService extends HttpService {

    obterCategorias() {

        return new Promise((resolve, reject) => {

            this.get('https://www.anajustra.org.br/api/diab/getCategoriasConvenios.php')
                .then(categorias => resolve(categorias))
                .catch(() => reject('Não foi possível obter as categorias de convênios.'));
        });
    }

    obterConveniosPorCategoria(categoriaId) {

        return new Promise((resolve, reject) => {

            this.get(`https://www.anajustra.org.br/api/diab/getConveniosCategoria.php?categoriaId=${categoriaId}`)
                .then(convenios => resolve(convenios))
                .catch(() => reject('Não foi possível obter os convênios da categoria.'));
        });        
    }

    obterConvenio(convenioId) {

        return new Promise((resolve, reject) => {

            this.get(`https://www.anajustra.org.br/api/diab/getConvenio.php?convenioId=${convenioId}`)
                .then(convenio => resolve(convenio))
                .catch(() => reject('Não foi possível obter o convênio.'));
        });          
    }
}