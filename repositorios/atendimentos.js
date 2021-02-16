const query = require('../infraestrutura/database/queries')
const { adiciona } = require('../models/atendimentos')

class Atendimento{
    adiciona(atendimento){
        const sql = "INSERT INTO atendimentos SET ?";
       return query(sql, atendimento)
    }
}

module.exports = new Atendimento()
