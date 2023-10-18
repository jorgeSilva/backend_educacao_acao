const EI = require('../../model/relacionadosEscola/eiModel')
const Yup = require('yup')
const Escola = require('../../model/relacionadosEscola/escolaModel')

class EIController{
  async store(req, res){

    const { nTurmas, parcial, integral, alunos0a3, alunos4, alunos5, fkescola } = req.body

    const schoolExist = await Escola.findById(fkescola)

    if(!schoolExist){
      return res.status(400).json({error: 'Escola não existente no banco de dados.'})
    }

    const cad = await EI.create({
      nTurmas,
      parcial,
      integral,
      alunos0a3,
      alunos4,
      alunos5,
      fkescola:schoolExist
    })

    try{
      await (await cad.save()).populate('fkescola')
      .then(r => res.status(200).json({r, msg: 'Cadastrado com sucesso.'}))
    }
    catch(error){
      res.status(400).json(error)
    }
  }

  async updateAluno0a3(req, res){
    const { alunos0a3 } = req.body
    const { _id } = req.params

    await EI.findByIdAndUpdate(
      {'_id': _id}, req.body, {new: true}
    ).then(r => res.status(200).json({r, msg: 'Atualizado com sucesso.'}))
    .catch(e => res.status(400).json(e))
  }

  async updateAluno4(req, res){
    const { alunos4 } = req.body
    const { _id } = req.params

    await EI.findByIdAndUpdate(
      {'_id': _id}, req.body, {new: true}
    ).then(r => res.status(200).json({r, msg: 'Atualizado com sucesso.'}))
    .catch(e => res.status(400).json(e))
  }

  async updateAluno5(req, res){
    const { alunos5 } = req.body
    const { _id } = req.params

    await EI.findByIdAndUpdate(
      {'_id': _id}, req.body, {new: true}
    ).then(r => res.status(200).json({r, msg: 'Atualizado com sucesso.'}))
    .catch(e => res.status(400).json(e))
  }

  async updateTTurmas(req, res){
    const { nTurmas, parcial, integral } = req.body
    const { _id } = req.params

    await EI.findByIdAndUpdate(
      {'_id': _id}, req.body, {new: true}
    ).then(r => res.status(200).json({r, msg: 'Atualizado com sucesso.'}))
    .catch(e => res.status(400).json(e))
  }

  async show(req, res){
    await EI.find().populate('fkescola')
    .then(r => res.status(200).json(r)).catch(e => res.status(400).json(e))
  }
}

module.exports = new EIController()