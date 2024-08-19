// Variáveis para armazenar o nome e XP do herói
let nome = "HeroiExemplo";
let xp = 8500;

// Função para determinar o nível com base na XP
let nivel;
if (xp < 1000) {
    nivel = "Ferro";
} else if (xp <= 2000) {
    nivel = "Bronze";
} else if (xp <= 5000) {
    nivel = "Prata";
} else if (xp <= 7000) {
    nivel = "Ouro";
} else if (xp <= 8000) {
    nivel = "Platina";
} else if (xp <= 9000) {
    nivel = "Ascendente";
} else if (xp <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Exibindo a mensagem final
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);