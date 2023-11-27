// só posso usar um export default por aqrquivo,

const mensagem = "Olá"; // essa variavel fica isolada nesse arquivo, e nao consigo usar ela em outo lugar
const texto = 'Tudo bem'

// alert(mensage);

//com export default posso exporta qualquer tipo de dado
// se eu quiser exporta varios tipo de dados faço da seguinte forma
export { mensagem, texto }; 