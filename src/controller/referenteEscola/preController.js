const PRE = require('../../model/relacionadosEscola/preModel')
const Escola = require('../../model/relacionadosEscola/escolaModel')

class PREController{
  async store(req, res){
    const { nTurmas, fkescola } = req.body

    const schoolExist = await Escola.findById(fkescola)

    if(!schoolExist){
      return res.status(400).json({error: 'Escola não existente no banco de dados.'})
    }

    const cad = await PRE.create({
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

  async updatePRE(req, res){
    const { nTurmas } = req.body
    const { _id } = req.params

    await PRE.findByIdAndUpdate(
      {'_id': _id}, req.body, {new:true}
    ).then(r => res.status(200).json({r, msg: 'Atualizado com sucesso.'}))
    .catch(e => res.status(400).json(e))
  }

  async deletePRE(req, res){
    const { _id } = req.params

    await PRE.findOneAndDelete(
      {'_id':_id}
    ).then(() => res.status(200).json({msg: 'Deletado com sucesso.'}))
    .catch(e => res.status(400).json(e))
  }

  async preShow(req, res){
    await PRE.find().populate('fkescola')
    .then(r => res.status(200).json(r))
    .catch(e => res.status(400).json(e))
  }
}

module.exports = new PREController()