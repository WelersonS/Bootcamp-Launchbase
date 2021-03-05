const turmaA = [
  {
    nome: "Mayk",
    nota: 5
  },
  {
    nome: "Diego",
    nota: 10
  },
  {
    nome: "Mayk",
    nota: 5
  }
]

const turmaB = [
  {
    nome: "Carlos",
    nota: 6
  },
  {
    nome: "Pedro",
    nota: 8
  },
  {
    nome: "João",
    nota: 3
  },
  {
    nome: 'Fulano',
    nota: 2
  }
]

function calculaMedia(alunos) {
  let soma = 0;
  for (let i = 0; i < alunos.length ; i++) {
    soma += alunos[i].nota
  }

  const media = soma / alunos.length
  return media
}

const media1 = calculaMedia(turmaA)
const media2 = calculaMedia(turmaB)

function sendMessage(media, turma) {
  if(media > 5) {
    console.log(`A média da ${turma} foi de ${media}. Parabéns!`)
  } else {
    console.log(`A média da ${turma} foi de ${media}. Precisa melhorar"`)
  }
}

sendMessage(media1, 'turmaA')
sendMessage(media2, 'turmaB')