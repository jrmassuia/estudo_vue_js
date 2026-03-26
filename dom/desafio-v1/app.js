  new Vue({
    el: "#desafio",
    data: {
      nome: "Romualdo!",
      idade: 35,
      multiplicador: 35 * 3,
      link: "https://freepngimg.com/thumb/car/2-2-car-transparent.png",
      linkHtml: '<a href="https://www.google.com">Google</a>',
    },
    methods: {
      numeroRandomico: function () {
        return Math.random();
      },
    },
  })