module.exports = (app) => {
  app.get("/atendimentos", (req, res) =>
    res.send("voce está na rota de atendimentos e esta realizando um GET")
  );

  app.post("/atendimentos", (req, res) => {
    console.log(req.body)
    res.send("voce está na tora de atendimentos e esta realizando um POST")
  });
  
};
