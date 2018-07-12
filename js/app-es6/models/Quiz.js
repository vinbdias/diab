class Quiz {

    constructor() {

        this._iniciarPerfis();
        this._iniciarPerguntas();
        this._respostas = [];
    }

    _iniciarPerfis() {

        this._perfis = [

            {

                "indice": 90,
                "nomePerfil": "Consumidor Consciente",
                "textoPerfil": "Parabéns! Você é um consumidor consciente."
            },

            {

                "indice": 60,
                "nomePerfil": "Consumidor Moderado",
                "textoPerfil": "Você é um consumidor moderado."
            },

            {

                "indice": 30,
                "nomePerfil": "Consumidor Imprudente",
                "textoPerfil": "Cuidado! Você é um consumidor imprudente."
            }
        ];        
    }

    _iniciarPerguntas() {

        this._perguntas = [

            {

                "numero": 1,
                "textoPergunta": "Quando você tem um compromisso, como você se planeja para chegar a tempo?",
                "opcoes": [
                    {

                        "rotulo": "A",
                        "textoOpcao": "Espero algumas horas antes e vejo com quem posso ir. Se não conseguir uma carona, chamo um táxi.",
                        "valor": 3
                    },
                    {

                        "rotulo": "B",
                        "textoOpcao": "Deixo sempre para última hora, e se não consigo uma carona cancelo.",
                        "valor": 5
                    },
                    {

                        "rotulo": "C",
                        "textoOpcao": "Nunca pesquiso como vou me deslocar, mas em cima da hora vejo como faço pra chegar mais rápido, tentando gastar menos.",
                        "valor": 7
                    },
                    {

                        "rotulo": "D",
                        "textoOpcao": "Primeiro pesquiso como farei para chegar ao local, depois analiso qual a melhor dentre as opções: carro próprio, motorista de aplicativo ou transporte público.",
                        "valor": 10
                    }                                                            
                ]
            },

            {

                "numero": 2,
                "textoPergunta": "Você planejou usar seu 13º para pagar dívidas e despesas extras de começo de ano. Estamos em janeiro e você:",
                "opcoes": [
                    {

                        "rotulo": "A",
                        "textoOpcao": "Continuo com as dívidas antigas e fiz novas. As festas de fim de ano foram agitadas!",
                        "valor": 3
                    },
                    {

                        "rotulo": "B",
                        "textoOpcao": "Não consegui pagar todas as dívidas. Mas não tenho mais usado o cartão de crédito nem tenho feito compras parceladas.",
                        "valor": 5
                    },
                    {

                        "rotulo": "C",
                        "textoOpcao": "O 13º foi o valor exato para pagar as dívidas. Não sobrou, nem faltou.",
                        "valor": 7
                    },
                    {

                        "rotulo": "D",
                        "textoOpcao": "Paguei as dívidas e o dinheiro que sobrou guardei na poupança.",
                        "valor": 10
                    }                                                            
                ]
            },  
            
            {

                "numero": 3,
                "textoPergunta": "Você tem 1.000 reais para comprar um item X, e quando chega à loja descobre que ele está custando 1.200. Então você:",
                "opcoes": [
                    {

                        "rotulo": "A",
                        "textoOpcao": "Compro. Vai que amanhã ele está mais caro? Além disso, corro o risco de gastar esse dinheiro com outra coisa.",
                        "valor": 3
                    },
                    {

                        "rotulo": "B",
                        "textoOpcao": "Parcelo. Melhor garantir a compra.",
                        "valor": 5
                    },
                    {

                        "rotulo": "C",
                        "textoOpcao": "Tento negociar com o vendedor. Se eu conseguir 5% de desconto, levo para casa.",
                        "valor": 7
                    },
                    {

                        "rotulo": "D",
                        "textoOpcao": "Não compro. Prefiro esperar uma liquidação ou a Black Friday. Além disso, pode ser que até lá eu descubra que esse item não era tão necessário quanto pensava.",
                        "valor": 10
                    }                                                            
                ]
            },    
            
            {

                "numero": 4,
                "textoPergunta": "Como você reage quando recebe a fatura do seu cartão:",
                "opcoes": [
                    {

                        "rotulo": "A",
                        "textoOpcao": "Pago o mínimo e parcelo o restante.",
                        "valor": 3
                    },
                    {

                        "rotulo": "B",
                        "textoOpcao": "Ufa, consigo pagar. Mas vou ter que passar o mês usando novamente o cartão de crédito. Não sobrou nada do meu salário.",
                        "valor": 5
                    },
                    {

                        "rotulo": "C",
                        "textoOpcao": "Pago as contas e o que sobra dá para os principais gastos e alguns imprevistos",
                        "valor": 7
                    },
                    {
                        
                        "rotulo": "D",
                        "textoOpcao": "Divido entre contas a pagar, dinheiro para usar no mês e uma reserva para a poupança.",
                        "valor": 10
                    }                                                            
                ]
            },
            
            {

                "numero": 5,
                "textoPergunta": "Como você consegue chegar com o seu salário/rendimento até o final do mês?",
                "opcoes": [
                    {

                        "rotulo": "A",
                        "textoOpcao": "Sempre! Inclusive restaurantes mais caros e compras grandes no supermercado.",
                        "valor": 3
                    },
                    {

                        "rotulo": "B",
                        "textoOpcao": "Com alguma frequência, sempre que preciso comprar intens como roupas e sapatos, por exemplo.",
                        "valor": 5
                    },
                    {

                        "rotulo": "C",
                        "textoOpcao": "Às vezes, quando preciso comprar coisas mais caras como celulares e eletrônicos em geral.",
                        "valor": 7
                    },
                    {
                        
                        "rotulo": "D",
                        "textoOpcao": "Geralmente não. Planejo minhas compras e quando preciso, tenho o dinheiro guardado para comprar à vista.",
                        "valor": 10
                    }                                                            
                ]
            },
            
            {

                "numero": 6,
                "textoPergunta": "Você parcela as suas compras?",
                "opcoes": [
                    {

                        "rotulo": "A",
                        "textoOpcao": "Sempre! Inclusive restaurantes mais caros e compras grandes no supermercado.",
                        "valor": 3
                    },
                    {

                        "rotulo": "B",
                        "textoOpcao": "Com alguma frequência, sempre que preciso comprar intens como roupas e sapatos, por exemplo.",
                        "valor": 5
                    },
                    {

                        "rotulo": "C",
                        "textoOpcao": "Às vezes, quando preciso comprar coisas mais caras como celulares e eletrônicos em geral.",
                        "valor": 7
                        
                    },
                    {
                        
                        "rotulo": "D",
                        "textoOpcao": "Geralmente não. Planejo minhas compras e quando preciso, tenho o dinheiro guardado para comprar à vista.",
                        "valor": 10
                    }                                                            
                ]
            },
            
            {

                "numero": 7,
                "textoPergunta": "Você consegue poupar para o futuro?",
                "opcoes": [
                    {

                        "rotulo": "A",
                        "textoOpcao": "Nunca consegui.",
                        "valor": 3
                    },
                    {

                        "rotulo": "B",
                        "textoOpcao": "Tento poupar, mas acabo sacando o dinheiro antes do fim do mês.",
                        "valor": 5
                    },
                    {

                        "rotulo": "C",
                        "textoOpcao": "Tenho uma poupança, mas vez ou outra faço retiradas.",
                        "valor": 7
                    },
                    {
                        
                        "rotulo": "D",
                        "textoOpcao": "Tenho uma poupança específica para planos de curto e médio prazo e outra para emergências",
                        "valor": 10
                    }                                                            
                ]
            },
            
            {

                "numero": 8,
                "textoPergunta": "Para você, ter dívidas é:",
                "opcoes": [
                    {

                        "rotulo": "A",
                        "textoOpcao": "Normal. Todo mundo tem.",
                        "valor": 3
                    },
                    {

                        "rotulo": "B",
                        "textoOpcao": "Preocupante. Todos os meses tento quitá-las.",
                        "valor": 5
                    },
                    {

                        "rotulo": "C",
                        "textoOpcao": "Só de pensar, me assusta. Estou com as contas em dia, mas no caso de um imprevisto, é inevitável não fazê-las. Vez ou outra, isso acaba acontecendo.",
                        "valor": 7
                    },
                    {
                        
                        "rotulo": "D",
                        "textoOpcao": "Inadmissível. Faço contas e me preparo todos os meses para evitá-las. Quanto tenho um imprevisto, uso a poupança que fiz para isso.",
                        "valor": 10
                    }                                                            
                ]
            }, 
            
            {

                "numero": 9,
                "textoPergunta": "Quando vai a uma loja para comprar algo que precisa, você:",
                "opcoes": [
                    {

                        "rotulo": "A",
                        "textoOpcao": "Sempre acabo saindo de lá com várias outras coisas que me chamaram a atenção no caminho.",
                        "valor": 3
                    },
                    {

                        "rotulo": "B",
                        "textoOpcao": "Aproveito para comprar outros itens apenas se eles estiverem em promoção.",
                        "valor": 5
                    },
                    {

                        "rotulo": "C",
                        "textoOpcao": "Reflito sobre o meu orçamento e então decido se posso ou não me dar ao luxo de comprar outras coisas.",
                        "valor": 7
                    },
                    {
                        
                        "rotulo": "D",
                        "textoOpcao": "Evito distrações e compro apenas o que tinha planejado.",
                        "valor": 10
                    }                                                            
                ]
            }, 
            
            {

                "numero": 10,
                "textoPergunta": "Como você ensinaria um filho pequeno a lidar com dinheiro e hábitos de consumo?",
                "opcoes": [
                    {

                        "rotulo": "A",
                        "textoOpcao": "Acabaria fazendo quase todas as suas vontades. Afinal, ele está na idade de se divertir.",
                        "valor": 3
                    },
                    {

                        "rotulo": "B",
                        "textoOpcao": "Daria presentes apenas em datas específicas, mas não conversaria sobre isso por ele ser muito novo para entender.",
                        "valor": 5
                    },
                    {

                        "rotulo": "C",
                        "textoOpcao": "Ensinaria o valor das coisas desde cedo, dando dinheiro de vez em quando para ele aprender a gastar de forma independente.",
                        "valor": 7
                    },
                    {
                        
                        "rotulo": "D",
                        "textoOpcao": "Conversaria sempre sobre o assunto, estipulando uma mesada semanal ou mensal para que ele aprenda a gerenciar seus gastos e consumos. ",
                        "valor": 10
                    }                                                            
                ]
            }          
        ];
    }

    calcularPerfil(respostas) {
        
        this._respostas = respostas;

        let pontuacao = this._calcularPontuacao();

        if(pontuacao >= 90)
            return this._perfis.find(perfil => {

                return perfil.indice == 90;
            });  
            
        if(pontuacao >= 60 && pontuacao < 90)
            return this._perfis.find(perfil => {

                return perfil.indice == 60;
            });        

        if(pontuacao < 60)
            return this._perfis.find(perfil => {

                return perfil.indice == 30;
            }); 

        return {

            "nomePerfil": "Indefinido",
            "textoPerfil": "Indefinido"                    
        };            
    }

    _calcularPontuacao(respostas) {

        let valores = [];
        this._respostas.forEach((rotuloResposta, indice) => {
            
            let opcaoResposta = this._perguntas[indice].opcoes.find(opcao => {
                
                return opcao.rotulo == rotuloResposta;
            });

            valores.push(opcaoResposta.valor);           
        });

        return valores.reduce((acumulador, valor) => acumulador + valor);
    }

    get perfis() {

        return this._perfis;
    }

    get perguntas() {

        return this._perguntas;
    }

    get respostas() {

        return this._respostas;
    }

    set respostas(respostas) {

        this._respostas = [].concat(respostas);
    }
}