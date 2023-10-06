const CRECHE = require('../../model/relacionadosEscola/crecheModel')
const Escola = require('../../model/relacionadosEscola/escolaModel')

class CRECHEController{
  async store(req, res){
    const { nTurmas, fkescola } = req.body

    const schoolExist = await Escola.findById(fkescola)

    if(!schoolExist){
      return res.status(400).json({error: 'Escola não existente no banco de dados.'})
    }

    const cad = await CRECHE.create({
      nTurmas,
      fkescola: schoolExist
    })

    try{
      await cad.save().then(r => res.status(200).json({r, msg: 'Cadastrado com sucesso.'}))
    }
    catch(error){
      res.status(400).json(error)
    }
  }

  async crecheShow(req, res){
    await CRECHE.find().populate('fkescola')
    .then(r => res.status(200).json(r))
    .catch(e => res.status(400).json(e))
  }
}

module.exports = new CRECHEController()