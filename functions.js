// A function declarada tem a variavel "arguments" (arrow function não tem*) que sustenta todos os argumentos
//enviados

function funcao() {
	let total = 0;
	for (let argumento of arguments) {
		total += argumento;
	}
	console.log(total);
}
funcao(1,2,3,4,5,6,7);

//// saida => 28 (soma total dos parametros enviados)