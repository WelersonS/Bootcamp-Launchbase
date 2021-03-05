const dev = [
    {
        nome: 'Welerson',
        idade: 25,
        tecnologias: [
            { nome: 'C++', especialidade: 'Desktop' },
            { nome: 'Python', especialidade: 'Data Science' },
            { nome: 'JavaScript', especialidade: 'Web/Mobile' }
        ]
    }
]

console.log(`O usuário ${dev[0].nome} tem ${dev[0].idade} anos e usa a tecnologia ${dev[0].tecnologias[0].nome} com especialidade em ${dev[0].tecnologias[0].especialidade}.`)