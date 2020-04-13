const names = [
    "Oscar",
    "Ana",
    "Nicolas",
    "Marco",
    "Claudia",
    "Alejandra",
    "Alejandro",
    "Rodrigo",
    "Paulina",
    "Jorge"
]

const randomName = () => {
    const name = names[Math.floor(Math.random() * names.length)];
    console.log(name);
}

module.exports = {randomName};