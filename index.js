const Heroi = require("./src/Heroi")

const heroiLucas = new Heroi("Lucas", "Paladino", 900);
const heroiPedro = new Heroi("Pedro", "Guerreiro", 8479);

const eloLucas = heroiLucas.xp;
heroiLucas.ranker(eloLucas)
heroiLucas.messageHero()

const eloPedro = heroiPedro.xp;
heroiPedro.ranker(eloPedro);
heroiPedro.messageHero();
