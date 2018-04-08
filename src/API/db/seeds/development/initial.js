exports.seed = function(knex, Promise) {
  return knex('bees')
    .del()
    .then(() => knex('users').del())
    .then(() => {
      return knex('users')
        .insert([
          { location: 'Maryland', age: 10, concern: 'Not very concerned' },
          { location: 'Colorado', age: 10, concern: 'Not very concerned' },
          { location: 'Jersey', age: 10, concern: 'Not very concerned' }
        ])
        .then(() => {
          return knex('bees').insert([
            { question: 'Do you LOVE bees', user_answer: 'YES', users_id: '1' },
            { question: 'what about BEES do you love most', user_answer: 'Honey', users_id: '1' }
          ]);
        })
        .then(() => console.log('Seeding complete!'))
        .catch(error => console.log(`Error Seeding, ${error}`));
    })
    .catch(error => console.log(`Error Seeding, ${error}`));
};
