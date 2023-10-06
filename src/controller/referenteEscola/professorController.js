const Professor = require('../../model/relacionadosEscola/professorModel')
const Escola = require('../../model/relacionadosEscola/escolaModel')
const Yup = require('yup')

class ProfessorController{
  async store(req, res){
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      funcao: Yup.string().required(),
      fkescola: Yup.string().required()
    })

    const { nome, funcao, fkescola } = req.body

    if(!nome){
      return res.status(400).json({error: 'Falha na validação do nome.'})
    }

    if(!funcao){
      return res.status(400).json({error: 'Falha na validação da função.'})
    }

    const schoolExist = await Escola.findById(fkescola)

    if(!schoolExist){
      return res.status(400).json({error: 'Escola não existente no banco de dados.'})
    }

    const cad = await Professor.create({
      nome,
      funcao,
      fkescola: schoolExist
    })

    try{
      await cad.save().then(r => res.status(200).json({r, msg: 'Cadastrado com sucesso.'}))
    }
    catch(error){
      res.status(400).json(error)
    }
  }

  async show(req, res){
    await Professor.find().populate('fkescola')
      .then(r => res.status(200).json(r))
        .catch(e => res.status(400).json(e))
  }

  async updateDados(req, res){
    const { nome, funcao, fkescola } = req.body
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

  async professor40h(req, res){
    await Professor.find({
      funcao:{'$eq': '40h'}
    }).populate('fkescola')
    .then(r => res.status(200).json(r))
    .catch(e => res.status(400).json(e))
  }

  async professorREA40h(req, res){
    await Professor.find({
      funcao:{'$eq': 'REA 40h'}
    }).populate('fkescola')
    .then(r => res.status(200).json(r))
    .catch(e => res.status(400).json(e))
  }

  async professorAF40h(req, res){
    await Professor.find({
      funcao:{'$eq': 'AF 40h'}
    }).populate('fkescola')
    .then(r => res.status(200).json(r))
    .catch(e => res.status(400).json(e))
  }

  async professor25h(req, res){
    await Professor.find({
      funcao:{'$eq': '25h'}
    }).populate('fkescola')
    .then(r => res.status(200).json(r))
    .catch(e => res.status(400).json(e))
  }

  async professorREA25h(req, res){
    await Professor.find({
      funcao:{'$eq': 'REA 25h'}
    }).populate('fkescola')
    .then(r => res.status(200).json(r))
    .catch(e => res.status(400).json(e))
  }

  async professorAF25h(req, res){
    await Professor.find({
      funcao:{'$eq': 'AF 25h'}
    }).populate('fkescola')
    .then(r => res.status(200).json(r))
    .catch(e => res.status(400).json(e))
  }

  async professorProfContr(req, res){
    await Professor.find({
      funcao:{'$eq': 'Professor contratado'}
    }).populate('fkescola')
    .then(r => res.status(200).json(r))
    .catch(e => res.status(400).json(e))
  }
}

module.exports = new ProfessorController()