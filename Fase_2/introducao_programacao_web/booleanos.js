const classA = [
  {
    name: "Mayk",
    grade: 8
  },
  {
    name: "Diego",
    grade: 5
  },
  {
    name: "Mayk",
    grade: 9.5
  }
]

const classB = [
  {
    name: "Carlos",
    grade: 6
  },
  {
    name: "Pedro",
    grade: 8
  },
  {
    name: "João",
    grade: 3
  }
]

function calculateAverage(students) {
  return (students[0].grade + students[1].grade + students[2].grade) / 3
}

function sendMessage(average, room) {
  if (average > 5) {
    console.log(`The class average ${room} was ${average.toFixed(1)}. Congrats!`)
  } else {
    console.log(`The class average ${room} was ${average.toFixed(1)}. Is not good!"`)
  }
}

function markAsFlunked(student) {
  student.flunked = false

  if (student.grade < 5) {
    student.flunked = true
  }
}

function sendMessageflunked(student) {
  if (student.flunked) {
    console.log(`The student ${student.name} is flunked.`)
  }
}

function studentsflunked(students) {
  for (let student of students) {
    markAsFlunked(student)
    sendMessageflunked(student)
  }
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, 'classA')
sendMessage(average2, 'classB')

studentsflunked(classA)
studentsflunked(classB)