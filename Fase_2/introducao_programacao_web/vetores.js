const alunos = [
    {
        nome: 'Mayk',
        nota: 10
    },
    {
        nome: 'Diego',
        nota: 7
    },
    {
        nome: 'Tiago',
        nota: 3
    }
]

const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3

console.log(`Média dos alunos é ${media}`)