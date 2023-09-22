const Servidor = require('../../model/servidores/servidoresModel')
const Escola = require('../../model/relacionadosEscola/escolaModel')
const Yup = require('yup')

class ServidorController{
  async store(req, res){
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      funcao: Yup.string().required(),
      cargo: Yup.string().required(),
      escolaFK: Yup.string().required()
    })

    const { nome, funcao, cargo, escolaFK } = req.body

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({error: 'Falha na validação dos campos de cadastro.'})
    }

    const schoolExist = await Escola.findById(escolaFK)

    if(!schoolExist){
      return res.status(400).json({error: 'Escola não existente no banco de dados.'})
    }

    const cad = await Servidor.create({
      nome,
      funcao,
      cargo,
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
    await Servidor.find()
      .then(r => res.status(200).json(r))
        .catch(e => res.status(400).json(e))
  }

  async updateDados(req, res){
    const { nome, funcao, cargo, escolaFK } = req.body
    const { _id } = req.params

    await Servidor.findByIdAndUpdate(
      {'_id':_id}, req.body, {new: true}
    ).then(r => res.status(200).json(r))
    .catch(e => res.status(400).json(e))
  }

  async updateCargo(req, res){
    const { cargo } = req.body
    const { _id } = req.params

    if(!cargo){
      return res.status(400).json({error: 'O campo não pode estar vazio.'})
    }

    await Servidor.findByIdAndUpdate(
      {'_id':_id}, req.body, {new: true}
    ).then(r => res.status(200).json(r))
    .catch(e => res.status(400).json(e))
  }
}

module.exports = new ServidorController()