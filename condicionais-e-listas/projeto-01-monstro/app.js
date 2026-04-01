new Vue({
  el: "#app",
  data: {
    running: false,
    playerlife: 100,
    monsterlife: 100,
    logs: [],
  },
  computed: {
    hasResult() {
      return this.playerlife == 0 || this.monsterlife == 0;
    },
  },
  methods: {
    startGame() {
      this.running = true;
      this.playerlife = 100;
      this.monsterlife = 100;
      this.logs = [];
    },
    attack(especial) {
      this.hurt("monsterlife", 5, 10, especial, "Jogador", "Monstro", "player");
      
      if (this.monsterlife > 0)
        this.hurt("playerlife", 7, 12, false, "Monstro", "Jogador", "monster");
    },
    healAndHurt() {
      this.hel(10, 15);
      this.hurt("playerlife", 7, 12, false, "Monstro", "Jogador", "monster");
    },
    hurt(atr, min, max, especial, source, target, cls) {
      const plus = especial ? 5 : 0;
      const hurt = this.getRandom(min + plus, max + plus);
      this[atr] = Math.max(this[atr] - hurt, 0);
        this.registerLog(`${source} atingiu ${target} com ${hurt}.`, cls);
    },
    hel(min, max) {
      const heal = this.getRandom(min, max);
      this.playerlife = Math.min(this.playerlife + heal, 100);
    },
    getRandom(min, max) {
      const value = Math.random() * (max - min) + min;
      return Math.round(value);
    },
    registerLog(text, cls) {
      this.logs.unshift({
        text,
        cls,
      });
    },
  },
  watch: {
    hasResult(value) {
      if (value) this.running = false;
    },
  },
});
