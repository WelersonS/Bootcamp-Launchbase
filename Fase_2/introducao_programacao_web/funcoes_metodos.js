const turmaA = [
  {
    nome: "Mayk",
    nota: 8
  },
  {
    nome: "Diego",
    nota: 5
  },
  {
    nome: "Mayk",
    nota: 9.5
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
  }
]

function calculaMediaTurma(alunos) {
  return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}

const media1 = calculaMediaTurma(turmaA)
const media2 = calculaMediaTurma(turmaB)

function sendMessage(media, turma) {
  if(media > 5) {
    console.log(`A média da ${turma} foi de ${media}. Parabéns!`)
  } else {
    console.log(`A média da ${turma} foi de ${media}. Precisa melhorar"`)
  }
}

sendMessage(media1, 'turmaA')
sendMessage(media2, 'turmaB')