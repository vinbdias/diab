class QuizService extends HttpService {

    gravarQuiz(respostas, resultadoQuiz) {

        let postData = {

            "resposta_1": respostas[0],
            "resposta_2": respostas[1],
            "resposta_3": respostas[2],
            "resposta_4": respostas[3],
            "resposta_5": respostas[4],
            "resposta_6": respostas[5],
            "resposta_7": respostas[6],
            "resposta_8": respostas[7],
            "resposta_9": respostas[8],
            "resposta_10": respostas[9],
            "perfil": resultadoQuiz.nomePerfil,
            "pontuacao": resultadoQuiz.pontuacao
        };

        return new Promise((resolve, reject) => {

            this.post('https://www.anajustra.org.br/api/diab/gravaRespostasQuiz.php', postData)
                .then((respostas) => resolve(respostas))
                .catch(() => reject('Não foi possível gravar as respostas do quiz.'));
        });
    }
}