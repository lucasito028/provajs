/*
Destruction (1 ponto):
Escreva uma função chamada getInfo que aceita um objeto com as propriedades 
nome e idade e utilize a destructuring assignment para extrair e retornar esses 
valores em uma string formatada
*/

function excercise01({
    person = {
        name: "Lucas",
        age: 18
    }
}){

    const getInfo = (objeto) => {
        const {name, age} = objeto;
        console.log(name);
        console.log(age);
    }

    getInfo(person);

}

/*
Arrow Function (1 ponto):
Escreva uma arrow function chamada dobrarNumeros que recebe um array de 
números como parâmetro e retorna um novo array com cada número dobrado.
*/

function excercise02({number = [1, 2, 3, 4, 5]}){

    const numberdouble = []
    
    number.map((number) => {
        numberdouble.push(number * 2)
    })

    number.map((number) => {console.log(number);});

    console.log("\n");

    numberdouble.map((numberdouble) => {console.log(numberdouble);});

}

/* - Não Completo
Filter, Map e Reduce (1 ponto)
a) Utilizando o método filter, escreva uma função chamada filtrarPares que 
recebe um array de números e retorna um novo array contendo apenas os 
números pares.
b) Utilizando o método map, escreva uma função chamada converterParaString 
que recebe um array de números e retorna um novo array contendo cada número 
convertido para uma string.
c) Utilizando o método reduce, escreva uma função chamada somarElementos 
que recebe um array de números e retorna a soma de todos os elementos.
*/

function excercise03({numbertest = [1, 2, 3, 4, 5] }){

    const exc_A = (numbertest) => {

        const justpares = []

        numbertest.filter((numbertest) => {
            if(numbertest % 2 == 0){
                justpares.push(numbertest)
            }

        })
        console.log(justpares)
    }

    const exc_B = (numbertest) => {

        const numbertext = []

        /*
        Essa parte peguei dessa fonte aqui: https://www.w3schools.com/jsref/jsref_tostring_array.asp
        Apesar de que o erro era bobo mas e já tinha feito a unica diferença é do toUppercase(); toString();
        para soma dos resultados - Estava dando muitos erros, ai me baseei 
        */

        const tochar = numbertest => numbertest.toString()

        numbertest.map((numbertest) => {
                numbertext.push(tochar(numbertest))})  

        /*
        Codigo Anterior para comparar:  

        numbertest.map(() => {

                numbertext.push((numbertest) => {numbertest.toString()})  

        });

        numbertext.map((numbertext) => {
            console.log(numbertext);
        })
        */

        console.log(numbertext)
    }

    const exc_C = (numbertest) => {

        const sumbrute = 0;
        /*
        Essa parte peguei dessa fonte aqui: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
        para soma dos resultados - Estava dando muitos erros, ai me baseei 
        */
        const somarElementos = numbertest.reduce((acumulator, currencynumber) => 
        acumulator + currencynumber, sumbrute);

        /*
        Codigo Anterior para comparar:  

        const somarElementos = numbertest.reduce((all, currencynumber) => {
            return (all += currencynumber);
        }, []);
        */

        console.log(somarElementos);

    }

    exc_A(numbertest);

    exc_B(numbertest);

    exc_C(numbertest);

}

/*
Set Interval e Set Timeout (1 ponto):
Escreva um programa que imprime a frase "Olá, mundo!" a cada 2 segundos 
utilizando setInterval, e depois de 10 segundos, imprime a frase "Fim do 
programa!" utilizando setTimeout
*/

function excercise04({msg1 = "Olá Mundo!", msg2 = "Fim do Programa!"}){

    const interval = setInterval(() => {
        console.log(msg1)
    }, 1000)
    
    setTimeout(() => {
        console.log(msg2)

        //Essa Parte Literalmente peguei do meu estudo: (estudoset.js)
        clearInterval(interval);
    }, 5000)

}

/*
Bind e This (1 ponto):
Crie um objeto chamado pessoa com uma propriedade nome e um método 
dizerNome. Utilize o método bind() para garantir que o this dentro do método 
dizerNome se refira ao objeto pessoa. Em seguida, chame o método dizerNome 
e imprima o resultado. */

function excercise05({nome = "Lucas"}){

    person = {
        name: nome,
        dizerNome() {
            console.log(`Meu nome é: ${this.name}`)
        }
    }

    const speakname = person.dizerNome.bind(person);
    speakname();

}


/* 
Desafio - Aplicação Prática (4 pontos):
Você foi contratado para desenvolver um sistema de gerenciamento de estoque 
para uma loja online. O sistema deve permitir que os usuários visualizem os 
produtos disponíveis, adicionem itens ao carrinho de compras e finalizem a 
compra. Além disso, deve calcular o total da compra e aplicar descontos 
promocionais, se aplicável. Para isso, você precisará:
Criar uma classe Produto com as propriedades nome, preco e quantidade.
Implementar um método calcularSubtotal na classe Produto que calcula o 
subtotal do produto (preço multiplicado pela quantidade).
Utilizar a destructuring assignment para extrair o nome, preço e quantidade de 
cada produto.
Utilizar arrow functions para simplificar o código sempre que possível.
Utilizar os métodos filter, map e reduce para manipular arrays de produtos.
Utilizar setInterval para simular uma atualização periódica do estoque.
Utilizar setTimeout para aplicar um desconto promocional após um certo período 
de tempo.
Utilizar bind para garantir o contexto correto do this em métodos de classe.
Criar uma lógica usando prompt e alert, para simular as interações do usuário 
que permita ao usuário visualizar os produtos, adicionar itens ao carrinho e 
finalizar a compra.
*/

function challenge({
    product = [     
        produto = {
            nome: "Exemplo1",
            preco: 10.50,
            quantidade: 20
        }
        ]
})
{

    class Produto {

        constructor(name, price, stock){

            this.name = name;
            this.price = price;
            this.stock = stock;

            console.log(`Nome do Produto: ${this.name}`)
            console.log(`Preço Produto: ${this.price}`)
            console.log(`Quantidade Produto: ${this.stock}`)

        }


        calcularSubtotal = (stock) => {

            if(stock <= this.stock) {
                console.log(`\nSubtotal do Produto ${this.name}: ${this.price * stock}R$`)
            }else {
                console.log(`Não pode ultrapassar o limite`)
            }

        }


        updatestock = (time, valuestock) => {

            const interval = setInterval(() => {
                this.stock = this.stock + valuestock
            }, 750)
            
            setTimeout(() => {
                clearInterval(interval);
                console.log(`O estoque está agora: ${this.stock}`)
            }, time * 1000)
            

        }


        creatediscount = (time, valuediscount) => {

            console.log(`Desconto até ${time} segundos`)
            const interval = setInterval(() => {
                console.log(`O Desconto está na ativa!! de ${valuediscount}%\n\nProduto ${this.name} está custando: ${this.price / (1 + (valuediscount / 100))}`)
            }, 750)
            
            setTimeout(() => {
                clearInterval(interval);
                console.log(`\n\nO desconto acabou`)
            }, time * 1000)
            

        }


    }

    const {nome, preco, quantidade} = product[0];

    const p1 = new Produto(nome, preco, quantidade);

    const calculosubtotal = p1.calcularSubtotal.bind(p1)(10)
    const criardesconto = p1.creatediscount.bind(p1)(5, 10)

    const {name: nm, price: pr, stock: qtd} = p1;

    console.log(nm)
    console.log(pr)
    console.log(qtd)


    // Para não rolar Bug por favor testar um ou outro
    // p1.updatestock(2, 8)

    // 
    //


}

// To test just press enter
// excercise01({ });
// excercise02({ });
// excercise03({ });
// excercise04({ });
// excercise05({ });
// 
challenge({ });