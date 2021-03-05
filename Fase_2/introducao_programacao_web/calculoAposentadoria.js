const nome = 'Silvana'
const idade = 45
const sexo = 'F'
const contribuicao = 40

if ((sexo === 'M' && contribuicao >= 35) || (sexo === 'F' && contribuicao >= 30)) {
    if( (sexo === 'M' && (contribuicao + idade) >= 85) || (sexo === 'F' && ((contribuicao + idade) >= 80)))
        console.log(`${nome}, você pode se aposentar!`)
    else 
        console.log(`${nome}, você ainda não pode se aposentar!`)
} else {
    console.log(`${nome}, você ainda não pode se aposentar!`)
}