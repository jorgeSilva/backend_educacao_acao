const EI = require('../../model/relacionadosEscola/eiModel')
const Yup = require('yup')
const Escola = require('../../model/relacionadosEscola/escolaModel')

class EIController{
  async store(req, res){
    // const schema = Yup.object().shape({
    //   nTurmas: Yup.string().required(),
    //   parcial: Yup.string().required(),
    //   integral: Yup.string().required(),
    //   alunos0a3: Yup.string().required(),
    //   alunos4: Yup.string().required(),
    //   alunos5: Yup.string().required(),
    //   fkescola: Yup.string().required()
    // })

    const { nTurmas, parcial, integral, alunos0a3, alunos4, alunos5, fkescola } = req.body

    // if(!(await schema.isValid(req.body))){
    //   return res.status(400).json({error: 'Falha na validação dos campos de cadastro.'})
    // }

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

  async updateTTurmas(req, res){
    const { nTurmas } = req.body
    const { _id } = req.params

    if(!nTurmas){
      return res.status(400).json({error: 'Campo invalido.'})
    }

    await EI.findByIdAndUpdate(
      {'_id':_id}, req.body, {new: true}
    ).then(r => res.status(200).json(r))
    .catch(e => res.status(400).json(e))
  }

  async updateIntegral(req, res){
    const { integral } = req.body
    const { _id } = req.params

    if(!integral){
      return res.status(400).json({error: 'Campo invalido.'})
    }

    await EI.findByIdAndUpdate(
      {'_id':_id}, req.body, {new: true}
    ).then(r => res.status(200).json(r))
    .catch(e => res.status(400).json(e))
  }

  async updateParcial(req, res){
    const { parcial } = req.body
    const { _id } = req.params

    if(!parcial){
      return res.status(400).json({error: 'Campo invalido.'})
    }

    await EI.findByIdAndUpdate(
      {'_id':_id}, req.body, {new: true}
    ).then(r => res.status(200).json(r))
    .catch(e => res.status(400).json(e))
  }

  async show(req, res){
    await EI.find().populate('fkescola')
    .then(r => res.status(200).json(r)).catch(e => res.status(400).json(e))
  }
}

module.exports = new EIController()