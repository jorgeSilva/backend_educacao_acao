const Professor = require('../../model/relacionadosEscola/professorModel')
const Escola = require('../../model/relacionadosEscola/escolaModel')
const Yup = require('yup')

class ProfessorController{
  async store(req, res){
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      funcao: Yup.string().required(),
      escolaFK: Yup.string().required()
    })

    const { nome, funcao, escolaFK } = req.body

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({error: 'Falha na validação dos campos de cadastro.'})
    }

    const schoolExist = await Escola.findById(escolaFK)

    if(!schoolExist){
      return res.status(400).json({error: 'Escola não existente no banco de dados.'})
    }

    const cad = await Professor.create({
      nome,
      funcao,
      escolaFK:schoolExist
    })

    try{
      await cad.save().then(r => res.status(200).json({r, msg: 'Cadastrado com sucesso.'}))
    }
    catch(error){
      res.status(400).json(error)
    }
  }

  async show(req, res){
    await Professor.find()
      .then(r => res.status(200).json(r))
        .catch(e => res.status(400).json(e))
  }

  async updateDados(req, res){
    const { nome, funcao, escolaFK } = req.body
    const { _id } = req.params

    await Professor.findByIdAndUpdate(
      {'_id':_id}, req.body, {new: true}
    ).then(r => res.status(200).json(r))
    .catch(e => res.status(400).json(e))
  }

  async updateFuncao(req, res){
    const { funcao } = req.body
    const { _id } = req.params

    await Professor.findByIdAndUpdate(
      {'_id':_id}, req.body, {new: true}
    ).then(r => res.status(200).json(r))
    .catch(e => res.status(400).json(e))
  }
}

module.exports = new ProfessorController()