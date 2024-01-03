class Heroi{
    constructor(name, classe, xp) {
        this.nome = name;
        this.classe = classe;
        this.xp = xp;
    }

    ranker(xp) {
        switch (true) {
            case xp <= 1000:
                this.rank = "Ferro"
                break
            case xp > 1000 && xp <= 2000:
                this.rank = "Bronze";
                break
            case xp > 2000 && xp <= 5000:
                this.rank = "Prata";
                break
            case xp > 6000 && xp <= 7000:
                this.rank = "Ouro";
                break
            case xp > 7000 && xp <= 8000:
                this.rank = "Platina Diamante";
                break
            case xp > 8000 && xp <= 9000:
                this.rank = "Ascendente";
                break
            case xp > 9000 && xp <= 10000:
                this.rank = "Imortal";
                break
            case xp >= 10001:
                this.rank = "Radiante"
                break
            default:
                console.log("Invalido")
                break
        }
    }
    
    messageHero() {
        console.log(`O Herói de nome ${this.nome} está no nível de ${this.rank}`)
    }
}

module.exports = Heroi;