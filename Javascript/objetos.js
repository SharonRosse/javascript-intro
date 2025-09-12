// 1 - Encuentra a la persona que tiene más
// de 3 habilidades.
// 2 - Contar los usuarios conectados
// 3 - Contar los usuarios que tienen más de 50 puntos.
// 4 - Encontrar personas que sean desarrolladores MERN stack del objeto de los usuarios
// MERN significa Mongo, Express, React, Node.



const users = [
  {
    name: "Alex",
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'React', 'Node', 'Express'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  {
    name: "Asab",
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  {
    name: "Brook",
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'React', 'Node', 'Express'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  {
    name: "Daniel",
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  {
    name: "John",
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  {
    name: "Thomas",
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  {
    name: "Paul",
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
]

/*
users.length
function getUsersInformation(users) {
  let moreThanTreeSkills = 0;
  let peopleWhoHasMoreThanTreeSkills = []
  for(let i = 0; i < users.length; i++){
      if(users[i].skills.length > 3) {
        moreThanTreeSkills++;
        peopleWhoHasMoreThanTreeSkills.push(users[i].name)
      }
  }


  const objectToReturn = { 
    peopleWhoHasMoreThanTreeSkills: peopleWhoHasMoreThanTreeSkills,
    moreThanTreeSkills: moreThanTreeSkills,
    otro: "otro"
  }
  return objectToReturn;
}

const usersReturned = getUsersInformation(users);
console.log(`Las personas que tienen más de 
  tres habilidades son ${usersReturned.peopleWhoHasMoreThanTreeSkills}`)
  console.log(usersReturned.otro)
*/
function getUsersInformation(users) {
  let moreThanTreeSkills = 0;
  let peopleWhoHasMoreThanTreeSkills = []
  let usersLoggedIn = 0;
  let usersWithFiftyPoints = 0;
  let mern = []
  for(let i = 0 ; i < users.length ; i++) {
    if(users[i].skills.length > 3){
      moreThanTreeSkills++;
      peopleWhoHasMoreThanTreeSkills.push(users[i].name)
    }

    if(users[i].isLoggedIn) {
      usersLoggedIn++;
    }

    if(users[i].points === 50) {
      usersWithFiftyPoints++;
    }

    let mongo = false;
    let express = false;
    let react = false;
    let node = false;

    for(let j= 0; j< users[i].skills.length; j++){
      if(users[i].skills[j] === "MongoDB") {
        mongo = true
      }
      if(users[i].skills[j] === "React") {
        react = true
      }
      if(users[i].skills[j] === "Express") {
        express = true
      }
      if(users[i].skills[j] === "Node") {
        node = true
      }
    }

    if(mongo && express && react && node){
      mern.push(users[i].name)
    }

  }

    const objectToReturn = {
      moreThanTreeSkills: moreThanTreeSkills,
      peopleWhoHasMoreThanTreeSkills: peopleWhoHasMoreThanTreeSkills,
      usersLoggedIn: usersLoggedIn,
      usersWithFiftyPoints: usersWithFiftyPoints,
      mern: mern
    }
  
  return objectToReturn;
}

const usersReturned = getUsersInformation(users);
console.log(`Las personas que tienen más de tres habilidades son: ${usersReturned.peopleWhoHasMoreThanTreeSkills}`)
console.log(`Los cantidad de usuarios conectados son: ${usersReturned.usersLoggedIn}`)
console.log(`La cantidad de usuarios que tienen 50 puntos son : ${usersReturned.usersWithFiftyPoints}`)
console.log(`Las personas que son desarrolladores Mern Stack son: ${usersReturned.mern}`)


