const fs = require("fs");

//transforma o arquivo em stream e vai lendo aos poucos
fs.createReadStream("./assets/thiaguin.jpg")
    .pipe(fs.createWriteStream("./assets/thiaguin-stream.jpg")
    .on('finish', () => console.log('imagem foi escrita com sucesso'))
);
