exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("verbs")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("verbs").insert([
        {
          id: 1,
          question: "abandonar",
          answer: "abandono"
        },
        {
          id: 2,
          question: "abordar",
          answer: "abordo"
        },
        {
          id: 3,
          question: "abrazar",
          answer: "abrazas"
        },
        {
          id: 4,
          question: "abrir",
          answer: "abres"
        },
        {
          id: 5,
          question: "aburrir",
          answer: "aburres"
        },
        {
          id: 6,
          question: "acampar",
          answer: "acampas"
        },
        {
          id: 7,
          question: "acercar",
          answer: "acercas"
        },
        {
          id: 8,
          question: "acortar",
          answer: "acortamos"
        },
        {
          id: 9,
          question: "adivinar",
          answer: "adivinas"
        },
        {
          id: 10,
          question: "admirar",
          answer: "admiran"
        },
        {
          id: 11,
          question: "admitir",
          answer: "admiten"
        },
        {
          id: 12,
          question: "adorar",
          answer: "adoran"
        },
        {
          id: 13,
          question: "adornar",
          answer: "adornan"
        },
        {
          id: 14,
          question: "advertir",
          answer: "advierten"
        },
        {
          id: 15,
          question: "afirmar",
          answer: "afirman"
        }
      ])
    })
}