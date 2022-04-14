## Introdução a lógica de programação

### Introdução

Programação é uma forma de comunicação com o computador, através de sequência de comandos.

### Linguagens, Frameworks e Bibliotecas

Linguagem de programação: é uma forma de comunicar, dar instruções para uma máquina.

Linguagem de alto nível: sintaxe voltada para o entendimento humano, mais intuitiva. Ex: Python e JavaScript.

Linguagem de baixo nível: sintaxe voltada para o entendimento da máquina, mais complexa e não constam com comandos
tão intuitivos. Possuem instruções diretas para o processador, e são mais próximas da linguagem da máquina.
Ex: Assembly

Bibliotecas: se refere a uma coleção de pacotes, códigos já prontos, que fornecem funções. Seu objetivo é oferecer
um conjunto de funcionalidades prontas para uso.

Framework: é um conjunto de bibliotecas, que oferece uma arquitetura para o trabalho de desenvolvimento, além de
oferecer apenas funcionalidades.

### IDE

IDE - Ambiente de desenvolvimento, é um programa de computador que reune características e ferramentas de apoio
ao desenvolvimento de software.

### Algoritmos

Sequência finita de comandos/instruções

### Variáveis e Operações

Variáveis: espaço na memória do computador

Simples/primitivas. Ex: Textos: string, Númericos: int, decimal, float

Compostas: array, lista, etc

### Decisões

Usado para decidir algum fluxo do algoritmo, baseado em alguma condição estabelecida

#### Estrutura de decisão if-else

As estruturas de decisões, também conhecidas como estruturas condicionais e estrutura se-então-senão, 
exigem que o programador especifique uma ou mais condições a serem executadas pelo programa, e uma ou mais condições
caso o resultado seja verdadeiro ou falso.

Exemplo em pseudocódigo:

ALGORITMO "maioridade"

VAR idade

INICIO

	LEIA idade
	SE (idade > 18)
		ESCREVA("Maior de idade!")
	ENTÃO SE(idade == 18)
		ESCREVA("Tem 18 anos!")	
	SENÃO
		ESCREVA("Menor de idade!")
	
FIM

#### Estrutura switch-case

Estrutura de condição que define o código a ser executado com base em uma comparação de valores.

Exemplo em pseudocódigo:

ALGORITMO "borda_de_pizza"

VAR menu

INICIO

	LEIA menu
	ESCOLHA (menu)
		CASO (1):
			ESCREVA("Pizza com borda de queijo")
		CASO (2):
			ESCREVA("Pizza com borda de catupiry")
		PADRÃO:
			ESCREVA("Pizza sem borda")
	FIM-ESCOLHA
FIM


### Repetições

Uma estrutura que permite executar mais de uma vez o mesmo comando ou conjunto de comandos, de acordo com uma
condição, até que essa condição seja satisfeita.

Tipos de repetição: While, Do While, For.

#### While

Determina que enquanto uma determinada condição for válida, o bloco de código será executado.

O laço while testa a condição antes de executar o código, e caso a condição seja inválida no primeiro teste,
o bloco nem é executado.

Exemplo em pseudocódigo:

ALGORITMO "exemplo_enquanto"

VAR incremento, resultado

INICIO

	incremento = 2
	resultado = 0
	ENQUANTO (resultado < 10)
		resultado = resultado + incremento
	FIM-ENQUANTO

	ESCREVA(resultado)
FIM

#### Do While

Determina que enquanto uma determinada condição for válida, o bloco de código será executado. Porém, ele testa a
condição após executar o código, portanto, mesmo que a condição seja considerada inválida no primeiro teste, o
bloco será executado pelo menos uma vez.

Exemplo em pseudocódigo:

ALGORITMO "exemplo_do_while"

VAR incremento, resultado

INICIO

	incremento = 2
	resultado = 0
	FAÇA
		resultado = resultado + incremento
	ENQUANTO(resultado < 10)
	ESCREVA(resultado)
FIM

#### For

Permite que uma variável contadora seja testada e incrementada a cada iteração.

Recebe como entrada uma variável contadora, a condição e o valor de incremento.

Exemplo em pseudocódigo:

ALGORITMO "contando_ate_10"

VAR i

INICIO

	PARA (i = 1; ATÉ i <= 10; PASSO 1)
		ESCREVA(i)
	FIM-PARA
FIM
