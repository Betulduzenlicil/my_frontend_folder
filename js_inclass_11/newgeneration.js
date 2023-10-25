// const note = {
//     id: 1,
//     title: 'My first note',
//     date: '01/01/1970',
//     author: {
//       firstName: 'John',
//       lastName: 'Doe',
//       email: 'johndoe@example.com',
//     },
//   };
//   const { id, title, date, author: { firstName, lastName, email } } = note;
//   console.log(`${firstName} ${lastName}`, id, title, date, email);




// const date = [1970, 4, 20];
// traditional way
// const year = date[0];
// const month = date[1];
// const day = date[2];

// destructuring
// const [year, month, day] = date;
// console.log(day, month, year); // 20 4 1970
// skip the second item
// const [year2, , day2] = date;
// console.log(day2, year2);


// const note = {
//     id: 1,
//     title: 'My first note',
//     date: '25/04/1977',
//   };
  
  // Using forEach
//   Object.entries(note).forEach(([key, value]) => {
//     console.log(`${key}: ${value}`);
//   });

//   for (let [key, value] of Object.entries(note)) {
//     console.log(`${key}: ${value}`);
//   }

  const note = {
    title: 'My first note',
    author: {
      firstName: 'Sherlock',
      lastName: 'Holmes',
    },
    tags: ['personal', 'writing', 'investigations'],
  };
  // Then destructure the object, while also setting a new date variable with the default of new Date():
  
  const {
    title,
    date = new Date(),
    author: { firstName },
    tags: [personalTag, writingTag],
  } = note;
  console.log(date);

