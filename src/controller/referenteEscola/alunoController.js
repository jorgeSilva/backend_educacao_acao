const Aluno = require('../../model/relacionadosEscola/alunoModel')
const Escola = require('../../model/relacionadosEscola/escolaModel')
const Yup = require('yup')

class AlunoController{
  async store(req, res){
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      dataNasc: Yup.string().required(),
      nomeMae: Yup.string().required(),
      nomePai: Yup.string().required(),
      rua: Yup.string().required(),
      bairro: Yup.string().required(),
      nCasa: Yup.string().required(),
      contato: Yup.string().required(),
      periodo: Yup.string().required(),
      fkescola: Yup.string().required(),
    })

    const { nome, dataNasc, nomeMae, nomePai, rua, bairro, nCasa, contato, periodo, fkescola } = req.body

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({error: 'Falha na validação dos campos de cadastro.'})
    }

    const schoolExist = await Escola.findById(fkescola)

    if(!schoolExist){
      return res.status(400).json({error: 'Escola não existente no banco de dados.'})
    }

    const cad = await Aluno.create({
      nome,
      dataNasc,
      nomeMae,
      nomePai,
      rua,
      bairro,
      nCasa,
      contato,
      periodo,
      fkescola:schoolExist
    })

    try{
      await cad.save().then(r => res.status(200).json({r, msg: 'Cadastrado com sucesso.'}))
    }
    catch(error){
      res.status(400).json(error)
    }
  }

  async show(req, res){
    await Aluno.find().populate('fkescola')
    .then(r => res.status(200).json(r)).catch(e => res.status.json(e))
  }

  async update(req, res){
    const { nome, dataNasc, nomeMae, nomePai, rua, bairro, nCasa, contato, periodo, fkescola } = req.body
    const { _id } = req.params
    
    await Aluno.findByIdAndUpdate(
      {'_id': _id}, req.body, {new: true}
    ).then(r => res.status(200).json({r, msg: 'Atualizado com sucesso.'}))
    .catch(e => res.status(400).json(e))
  }

  async delete(req, res){
    const { _id } = req.params

    await Aluno.findOneAndDelete(
      {'_id':_id}
    ).then(() => res.status(200).json({msg: 'Deletado com sucesso.'}))
    .catch(e => res.status(400).json(e))
  }

  async alunoPeriodoParcial (req, res){
    await Aluno.find({
      periodo: {'$eq': 'Parcial'}
    }).populate('fkescola')
    .then(r => res.status(200).json(r))
    .catch(e => res.status(400).json(e))
  }

  async alunoPeriodoIntegral (req, res){
    await Aluno.find({
      periodo: {'$eq': 'Integral'}
    }).populate('fkescola')
    .then(r => res.status(200).json(r))
    .catch(e => res.status(400).json(e))
  }
}

module.exports = new AlunoController()