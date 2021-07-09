
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users").del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          user_name: "Legacy Sage",
          password: "admin",
          account_verified: true,
        },
        {
          id: 2,
          user_name: "Morpheus Fishburne",
          password: "teacher1",
          account_verified: true,
        },
        {
          id: 3,
          user_name: "Neo Reeves",
          password: "teacher2",
          account_verified: true,
        },
        {
          id: 4,
          user_name: "Egon Burress",
          password: "PT1G9MiaZ",
          account_verified: false,
        },
        {
          id: 5,
          user_name: "Donnajean de Voiels",
          password: "Jx6Fbg8lSq",
          account_verified: false,
        },
        {
          id: 6,
          user_name: "Tilly Randalson",
          password: "fESf7IvFrd",
          account_verified: false,
        },
        {
          id: 7,
          user_name: "Tiebold Arrell",
          password: "q9PFP4",
          account_verified: false,
        },
        {
          id: 8,
          user_name: "Abagail Sante",
          password: "d0COiBgAsOko",
          account_verified: false,
        },
        {
          id: 9,
          user_name: "Piotr Clarkson",
          password: "EsNk8lU2q",
          account_verified: false,
        },
        {
          id: 10,
          user_name: "Dave Priestner",
          password: "M28eov1xMr",
          account_verified: false,
        },
        {
          id: 11,
          user_name: "Teri Dibben",
          password: "mZpfdSQ5M",
          account_verified: false,
        },
        {
          id: 12,
          user_name: "Allyn Kwietak",
          password: "Sj1GSpE",
          account_verified: false,
        },
        {
          id: 13,
          user_name: "Dede Meek",
          password: "zkfa4CWMcP",
          account_verified: false,
        },
        {
          id: 14,
          user_name: "Clemence Ridwood",
          password: "jXCvVMdsb6Pc",
          account_verified: false,
        },
        {
          id: 15,
          user_name: "Aldridge Franzonetti",
          password: "6q7vjFkIzpUD",
          account_verified: false,
        },
        {
          id: 16,
          user_name: "Monah McCafferky",
          password: "zMXdMNSryV",
          account_verified: false,
        },
        {
          id: 17,
          user_name: "Karlik Staveley",
          password: "ay4ghYmWC1X",
          account_verified: false,
        },
        {
          id: 18,
          user_name: "Carlyle Berns",
          password: "t8rznW3dpWVM",
          account_verified: false,
        },
        {
          id: 19,
          user_name: "Kalil Crebbin",
          password: "BFX2BKpQ",
          account_verified: false,
        },
        {
          id: 20,
          user_name: "Maud Bordone",
          password: "QlmHpSbwTe0l",
          account_verified: false,
        },
        {
          id: 21,
          user_name: "Chastity Lockett",
          password: "80djQiilNr1",
          account_verified: false,
        },
        {
          id: 22,
          user_name: "Catriona Mettrick",
          password: "evGBg8rrKk5e",
          account_verified: false,
        },
        {
          id: 23,
          user_name: "Fidel Lascelles",
          password: "JlIyiUsCn",
          account_verified: false,
        },
        {
          id: 24,
          user_name: "Zea Leadbetter",
          password: "noIovRsLlcS",
          account_verified: false,
        },
        {
          id: 25,
          user_name: "Amelie Kuhne",
          password: "WgXqQK2FFws",
          account_verified: false,
        },
        {
          id: 26,
          user_name: "Dayle Riccardini",
          password: "RyH7upPYlio",
          account_verified: false,
        },
        {
          id: 27,
          user_name: "Marjory Wipfler",
          password: "Lk480jVbfu",
          account_verified: false,
        },
        {
          id: 28,
          user_name: "Rafferty Clifford",
          password: "bAbXerFQ",
          account_verified: false,
        },
        {
          id: 29,
          user_name: "Rourke Felten",
          password: "4YBP9lIymKJP",
          account_verified: false,
        },
        {
          id: 30,
          user_name: "Glennie Essberger",
          password: "R5OZDcnczKua",
          account_verified: false,
        },
        {
          id: 31,
          user_name: "Amandie Phin",
          password: "at5hg1UW3za",
          account_verified: false,
        },
        {
          id: 32,
          user_name: "Lauryn Schulz",
          password: "ezZfg0fwokgn",
          account_verified: false,
        },
        {
          id: 33,
          user_name: "Elias Antyshev",
          password: "4HzsFT",
          account_verified: false,
        },
        {
          id: 34,
          user_name: "Olivero Dulson",
          password: "t037AMovhD",
          account_verified: false,
        },
        {
          id: 35,
          user_name: "Hailey Algie",
          password: "dNgBcJyS",
          account_verified: false,
        },
        {
          id: 36,
          user_name: "Valaree Schenkel",
          password: "PKaarlVcS",
          account_verified: false,
        },
        {
          id: 37,
          user_name: "Teddie Scrivenor",
          password: "zoxDLT0",
          account_verified: false,
        },
        {
          id: 38,
          user_name: "Purcell Brauns",
          password: "ldIfkgh0Vo",
          account_verified: false,
        },
        {
          id: 39,
          user_name: "Rich Bernt",
          password: "u8VC94sQzyx4",
          account_verified: false,
        },
        {
          id: 40,
          user_name: "Noreen Arnet",
          password: "PQncj96X",
          account_verified: false,
        },
        {
          id: 41,
          user_name: "Drucie Wabersich",
          password: "9YdZBKve",
          account_verified: false,
        },
        {
          id: 42,
          user_name: "Marybelle Garlinge",
          password: "eV5dHW",
          account_verified: false,
        },
        {
          id: 43,
          user_name: "Aurel Rodgier",
          password: "3RcoSOc02N2",
          account_verified: false,
        },
        {
          id: 44,
          user_name: "Mildrid Nore",
          password: "iqxUEti1Wlz6",
          account_verified: false,
        },
        {
          id: 45,
          user_name: "Karina Normandale",
          password: "lqwfa3",
          account_verified: false,
        },
        {
          id: 46,
          user_name: "Forrester Tuckett",
          password: "UVHGPy",
          account_verified: false,
        },
        {
          id: 47,
          user_name: "Mahmoud Arne",
          password: "y6d960",
          account_verified: false,
        },
        {
          id: 48,
          user_name: "Ailina Donegan",
          password: "gIWZQ8qg0J",
          account_verified: false,
        },
        {
          id: 49,
          user_name: "Kylie Ravilus",
          password: "wy0oy4itxLU",
          account_verified: false,
        },
        {
          id: 50,
          user_name: "Rhetta Sedgeworth",
          password: "F2cMAL",
          account_verified: false,
        },
        {
          id: 51,
          user_name: "Rutger Grigoriscu",
          password: "pAUyues",
          account_verified: false,
        },
        {
          id: 52,
          user_name: "Estella Keniwell",
          password: "35r1Ddj84u",
          account_verified: false,
        },
        {
          id: 53,
          user_name: "Delmar Dorran",
          password: "KIu4V2",
          account_verified: false,
        },
        {
          id: 54,
          user_name: "Sissie Essel",
          password: "eKhHgZUXgre",
          account_verified: false,
        },
        {
          id: 55,
          user_name: "Doe McMechan",
          password: "2A7d1fN",
          account_verified: false,
        },
        {
          id: 56,
          user_name: "Amitie Stirling",
          password: "DXHXnyBzY",
          account_verified: false,
        },
        {
          id: 57,
          user_name: "Darnell Grasha",
          password: "oMKSk168A",
          account_verified: false,
        },
        {
          id: 58,
          user_name: "Regen Indruch",
          password: "zMHGhIlDI9Y",
          account_verified: false,
        },
        {
          id: 59,
          user_name: "Evy Sabates",
          password: "7KdGwoG51Z",
          account_verified: false,
        },
        {
          id: 60,
          user_name: "Marlane Dobell",
          password: "ipqdjB",
          account_verified: false,
        },
        {
          id: 61,
          user_name: "Oby Serotsky",
          password: "I5x86ai",
          account_verified: false,
        },
        {
          id: 62,
          user_name: "Helaina Fosserd",
          password: "bPEsKWxV",
          account_verified: false,
        },
        {
          id: 63,
          user_name: "Hildegarde Fullstone",
          password: "5Tol9FoAs",
          account_verified: false,
        },
        {
          id: 64,
          user_name: "Shoshanna Placide",
          password: "7OSfSOd",
          account_verified: false,
        },
        {
          id: 65,
          user_name: "Frannie Boig",
          password: "UxcB2g",
          account_verified: false,
        },
        {
          id: 66,
          user_name: "Francesco Lade",
          password: "yvQl5Sn",
          account_verified: false,
        },
        {
          id: 67,
          user_name: "Alene Espadero",
          password: "jMRZ74D",
          account_verified: false,
        },
        {
          id: 68,
          user_name: "Manuel Antonucci",
          password: "6q23DTOs9v",
          account_verified: false,
        },
        {
          id: 69,
          user_name: "Kelly Bruggen",
          password: "1QhwroIAPvSe",
          account_verified: false,
        },
        {
          id: 70,
          user_name: "Shari Zollner",
          password: "LFLrjD0",
          account_verified: false,
        },
        {
          id: 71,
          user_name: "Jami Calltone",
          password: "vDEZsN",
          account_verified: false,
        },
        {
          id: 72,
          user_name: "Free Bampkin",
          password: "fha13VYr",
          account_verified: false,
        },
        {
          id: 73,
          user_name: "Ennis Gravener",
          password: "90Jvw7",
          account_verified: false,
        },
        {
          id: 74,
          user_name: "Bea Barsam",
          password: "XlqQg0Zk5Pv",
          account_verified: false,
        },
        {
          id: 75,
          user_name: "Jorgan Giraudou",
          password: "ipH6atN8",
          account_verified: false,
        },
        {
          id: 76,
          user_name: "Luisa Tocknell",
          password: "7zDutBhV",
          account_verified: false,
        },
        {
          id: 77,
          user_name: "Ambros M'Quharge",
          password: "s6a9D8K",
          account_verified: false,
        },
        {
          id: 78,
          user_name: "Portia Fewell",
          password: "RX4PXII",
          account_verified: false,
        },
        {
          id: 79,
          user_name: "Dyna Blamey",
          password: "JYNRmZienob4",
          account_verified: false,
        },
        {
          id: 80,
          user_name: "Lorilee Picker",
          password: "CXpj0QMFV",
          account_verified: false,
        },
        {
          id: 81,
          user_name: "Marley Jan",
          password: "01Zww9ZOs",
          account_verified: false,
        },
        {
          id: 82,
          user_name: "Ysabel Cheasman",
          password: "0ScveGkxda0",
          account_verified: false,
        },
        {
          id: 83,
          user_name: "Far Harfleet",
          password: "577Na51WSbS0",
          account_verified: false,
        },
        {
          id: 84,
          user_name: "Vitia Claridge",
          password: "pzyOqQFgwrr6",
          account_verified: false,
        },
        {
          id: 85,
          user_name: "Vivi Schorah",
          password: "lpIX7n",
          account_verified: false,
        },
        {
          id: 86,
          user_name: "Willy Pennino",
          password: "BqIKJi",
          account_verified: false,
        },
        {
          id: 87,
          user_name: "Rosana Sextone",
          password: "ej1cFb6",
          account_verified: false,
        },
        {
          id: 88,
          user_name: "Delmer Mattingly",
          password: "2CoqB2",
          account_verified: false,
        },
        {
          id: 89,
          user_name: "Karel Gowthrop",
          password: "JDvpET",
          account_verified: false,
        },
        {
          id: 90,
          user_name: "Blondy Vedenisov",
          password: "aMA6kWcJ",
          account_verified: false,
        },
        {
          id: 91,
          user_name: "Nettle Turfitt",
          password: "3Z7J5ca",
          account_verified: false,
        },
        {
          id: 92,
          user_name: "Elijah Ornils",
          password: "S5jynu1Oaf6b",
          account_verified: false,
        },
        {
          id: 93,
          user_name: "Willy Hodges",
          password: "LEYG43frn3oG",
          account_verified: false,
        },
        {
          id: 94,
          user_name: "Auguste Runchman",
          password: "KCPFEP",
          account_verified: false,
        },
        {
          id: 95,
          user_name: "Allx Corrin",
          password: "w48wn8",
          account_verified: false,
        },
        {
          id: 96,
          user_name: "Ailene Cuffin",
          password: "UtBV9SQ",
          account_verified: false,
        },
        {
          id: 97,
          user_name: "Yoshi McVeigh",
          password: "f8M2XgtIqIb",
          account_verified: false,
        },
        {
          id: 98,
          user_name: "Cinderella Vibert",
          password: "jbaNrHAYV",
          account_verified: false,
        },
        {
          id: 99,
          user_name: "Halette Aikenhead",
          password: "HJ553p1",
          account_verified: false,
        },
        {
          id: 100,
          user_name: "Ruthann Glen",
          password: "vG5hF5OlVX",
          account_verified: false,
        },
      ]);
    });
};
