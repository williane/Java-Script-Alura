const teste = [
    {
        nome: 'will',
        idade: 25
    },
    {
        nome: 'joão',
        idade: 50
    },
    {
        nome: 'andré',
        idade: 23
    },
];

const mapa = teste.map((t) => {
    console.log(t.nome, t.idade);
});

const foEach = teste.forEach((t) => {
    console.log(t.nome, t.idade);
})
