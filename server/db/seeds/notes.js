exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        { id: 1, title: 'Greeting', note: 'hello notes app' },
        { id: 2, title: 'jinny and ningyi', note: 'are bilingual so english be hard for them sometimes' },
        { id: 3, title: 'burger geek', note: 'yum' }
      ])
    })
}
