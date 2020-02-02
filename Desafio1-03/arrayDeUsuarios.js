const usuarios = [
    { nome: 'Carlos', tecnologias: ['HTML', 'CSS'] },
    { nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS'] },
    { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] }
]

function retornaUsuario(usuario){
    for (let i = 0; i < usuario.length ; i++) {
        console.log(`${usuario[i].nome} trabalha com ${usuario[i].tecnologias}`)
    }
}
return retornaUsuario(usuarios);

