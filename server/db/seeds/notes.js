exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        { id: 1, title: 'Greeting', note: 'hello note app' },
        { id: 2, title: 'jinny talk', note: 'English is shit' },
        { id: 3, title: 'burger geek', note: 'yummmmmm' }
      ])
    })
}
