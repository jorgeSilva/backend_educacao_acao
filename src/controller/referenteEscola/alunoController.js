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
      escolaFK: Yup.string().required(),
    })

    const { nome, dataNasc, nomeMae, nomePai, rua, bairro, nCasa, contato, periodo, escolaFK } = req.body

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({error: 'Falha na validação dos campos de cadastro.'})
    }

    const schoolExist = await Escola.findById(escolaFK)

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
    await Aluno.find().populate('escolaFK')
    .then(r => res.status(200).json(r)).catch(e => res.status.json(e))
  }

  async update(req, res){
    const { nome, dataNasc, nomeMae, nomePai, rua, bairro, nCasa, contato, periodo, escolaFK } = req.body
    const { _id } = req.params
    
    await Aluno.findByIdAndUpdate(
      {'_id': _id}, req.body, {new: true}
    ).then(r => res.status(200).json(r))
    .catch(e => res.status(400).json(e))
  }
}

module.exports = new AlunoController()