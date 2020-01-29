const nome = 'Silvana';
const sexo = 'F';
const idade = 50;
const contribuicao = 35;

if ((sexo == 'F' && (idade + contribuicao) >= 85) || 
    (sexo == 'M' && (idade + contribuicao) >= 95)){
    console.log(`${nome} você pode se aposentar!`)
} else {
    console.log(`${nome} você ainda não pode se aposentar!`)
};