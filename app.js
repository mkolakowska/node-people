const fs = require('fs');

const genders = ['F', 'M'];
const maleNames = [
  'Adam',
  'Peter',
  'Antoni',
  'Maxwell',
  'Conner',
  'Farhan',
  'Alan',
  'Harley',
  'Erik',
  'Charles',
  'Robbie',
  'Omar',
  'Oliver',
  'Jimmy',
  'Yasin',
  'Ellis',
  'Kieron',
  'Anas',
  'Hamish',
  'Leonard',
  'Roman',
  'Connor',
  'Maximilian',
  'Zakariya',
  'Dale',
  'Owain',
  'Tristan',
  'Clayton',
  'Theodore',
  'Amir',
  'Usman',
  'Guy',
  'Saul',
  'Kyle',
  'Umar',
  'Imran',
  'Cory',
  'Jenna',
  'Rhys',
  'Douglas',
  'Ricky',
  'Lewis',
  'Muhammad',
  'Hashim',
  'Cole',
  'Declan',
];

const femaleNames = [
  'Lillian',
  'Nellie',
  'Chantelle',
  'Tia',
  'Christine',
  'Karen',
  'Hayley',
  'Alice',
  'Scarlet',
  'Tara',
  'Holly',
  'Alicia',
  'Hazel',
  'Fern',
  'Ida',
  'Monica',
  'Lia',
  'Sharon',
  'Ayla',
  'Layla',
  'Bertha',
  'Ellen',
  'Max',
  'Carla',
  'Susan',
  'Halima',
  'Aimee',
  'Michaela',
  'Lauren',
  'Kara',
  'Erika',
  'Gracie',
  'Nora',
  'Melissa',
  'Harmony',
  'Cassie',
  'Troy',
  'Alina',
  'Isobelle',
  'Angela',
  'Victoria',
  'Lillie',
  'Leonie',
  'Sally',
  'Bethany',
  'Martha',
  'Carly',
  'Kathleen',
  'Alyssa',
  'Connie',
  'Maisie',
];
const lastNames = [
  'Mccarthy',
  'Cunningham',
  'Townsend',
  'Fischer',
  'Donnelly',
  'Bush',
  'Herbert',
  'Crawford',
  'Walters',
  'Potter',
  'Cox',
  'Farmer',
  'Wolf',
  'Whelan',
  'Harrington',
  'Morgan',
  'Stevenson',
  'Richardson',
  'Steele',
  'Black',
  'Spence',
  'Burns',
  'Jensen',
  'Garner',
  'Smith',
  'Adams',
  'Reese',
  'Barnett',
  'Thompson',
  'Zhang',
  'Jenkins',
  'Mathis',
  'Allen',
  'Sparks',
  'Simpson',
  'Martinez',
  'Conner',
  'Thomas',
  'Jackson',
  'Moore',
  'Mendoza',
  'Daniels',
  'Ford',
  'Carroll',
  'Barker',
  'Kay',
  'Olson',
  'Lewis',
  'Torres',
  'Baker',
  'Osborne',
  'Reyes',
  'Leon',
  'Chapman',
  'Griffin',
];
const randChoice = (arr) => arr[Math.floor(Math.random() * arr.length)];

const people = [];

const selectPerson = () => {
  for (let i = 0; i < 20; i++) {
    const person = {};
    person.gender = randChoice(genders);
    person.firstName =
      person.gender === 'M' ? randChoice(maleNames) : randChoice(femaleNames);
    person.lastName = randChoice(lastNames);
    person.age = Math.floor(Math.random() * 61) + 18;

    const number = () => Math.floor(Math.random() * 10);
    person.phone = `${number()}${number()}${number()}-${number()}${number()}${number()}-${number()}${number()}${number()}`;
    person.email = `${person.firstName.toLowerCase()}.${person.lastName.toLowerCase()}@.gmail.com`;

    people.push(person);
  }
};
selectPerson();

const peopleJSON = JSON.stringify(people);

fs.writeFile('people.json', peopleJSON, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
