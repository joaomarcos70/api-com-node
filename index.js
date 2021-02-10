const customExpress = require("./config/customExpress");
const conexao = require("./infraestrutura/conexao");
const app = customExpress();

conexao.connect((erro) => {
  if (erro) {
    console.log(erro);
  } else {
    console.log("conectado com sucesso");
    app.listen(3000, () => console.log("servidor rodando na porta 3000"));
  }
});
